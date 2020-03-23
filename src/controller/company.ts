import {Controller} from './controller';
import {HttpServer} from '../server/httpServer';
import {Request, Response} from 'restify';
import ImageService from '../services/image';
import CompanyService from '../services/company';

export default class CompanyController implements Controller {
  public initialize(httpServer: HttpServer): void {
    httpServer.setPrefix('/company');
    httpServer.post('/register', async (req: Request, res: Response): Promise<any> => {
      if (!req.body) {
        throw new Error();
      }
      const {emailAddress, name, password} = req.body;
      // const existingUser = await CompanyService.getCompanyByEmailAddress(emailAddress);
      // if (existingUser) {
      //   throw new Error('EmailAddressAlreadyInUse');
      // }
      // await UserService.createUser(firstName, lastName, emailAddress, password);
      res.send(200);
    });
    httpServer.post('/login', async (req: Request, res: Response): Promise<any> => {
      // const customer = await exampleService.getById(req.params.id);
      // res.send(customer ? 200 : 404, customer);
    });
    httpServer.post('/logout', async (req: Request, res: Response): Promise<any> => {
      // const customer = await exampleService.getById(req.params.id);
      // res.send(customer ? 200 : 404, customer);
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
