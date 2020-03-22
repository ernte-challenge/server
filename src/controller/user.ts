import {Controller} from './controller';
import {HttpServer} from '../server/httpServer';
import {Request, Response} from 'restify';
import ImageService from '../services/image';
import UserService from '../services/user';
import SessionService from '../services/session';

export default class UserController implements Controller {
  public initialize(httpServer: HttpServer): void {
    httpServer.setPrefix('/user');
    httpServer.post('/register', async (req: Request, res: Response): Promise<any> => {
      if (!req.body) {
        throw new Error();
      }
      const {emailAddress, firstName, lastName, password} = req.body;
      const existingUser = await UserService.getUserByEmailAddress(emailAddress);
      if (existingUser) {
        throw new Error('EmailAddressAlreadyInUse');
      }
      const user = await UserService.createUser(firstName, lastName, emailAddress, password);
      const sessionId = await SessionService.createSessionForUser(user);
      (res as any).setCookie('SessionId', sessionId);
      res.send(200);
    });

    httpServer.post('/login', async (req: Request, res: Response): Promise<any> => {
      if (!req.body) {
        throw new Error();
      }
      const {emailAddress, password} = req.body;
      const existingUser = await UserService.getUserByEmailAddress(emailAddress);
      if (!existingUser) {
        throw new Error('UserNotFound');
      }
      const passwordCorrect = await UserService.validatePassword(existingUser, password);
      if (!passwordCorrect) {
        throw new Error('WrongPassword');
      }
      const sessionId = await SessionService.createSessionForUser(existingUser);
      (res as any).setCookie('SessionId', sessionId);
      res.send(200);
    });

    httpServer.post('/logout', async (req: Request, res: Response): Promise<any> => {
      await SessionService.deleteSession(req);
      (res as any).clearCookie('SessionId');

      res.send(200);
    });

    httpServer.post('/uploadImage', async (req: Request, res: Response): Promise<any> => {
      const files = req.files;
      // Wir erlauben nur den Upload eines Bildes, da dieser das alte ersetzen soll
      let newFileName;
      if (files && Object.keys(files).length === 1) {
        for (const key in files) {
          if (files.hasOwnProperty(key)) {
            newFileName = await ImageService.uploadUserImage(files[key].path);
          }
        }
      }
      res.send({ newFileName });
      // const customer = await exampleService.getById(req.params.id);
      // res.send(customer ? 200 : 404, customer);
    });

    httpServer.get('/image', (req: Request, res: Response): any => {
      const imageBuffer = ImageService.getUserImage(req.query.fileName);
      res.writeHead(200);
      res.write(imageBuffer);
      res.end();
    });
    // httpServer.post('/customer', this.create.bind(this));
    // httpServer.put('/customer/:id', this.update.bind(this));
    // httpServer.del('/customer/:id', this.remove.bind(this));
  }
}
