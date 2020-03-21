import {Controller} from './controller';
import {HttpServer} from '../server/httpServer';
import {Request, Response} from 'restify';

export default class UserController implements Controller {
  public initialize(httpServer: HttpServer): void {
    httpServer.setPrefix('/user');
    httpServer.post('/register', async (req: Request, res: Response): Promise<any> => {

    });
    httpServer.post('/login', async (req: Request, res: Response): Promise<any> => {
      // const customer = await exampleService.getById(req.params.id);
      // res.send(customer ? 200 : 404, customer);
    });
    httpServer.post('/logout', async (req: Request, res: Response): Promise<any> => {
      // const customer = await exampleService.getById(req.params.id);
      // res.send(customer ? 200 : 404, customer);
    });
    // httpServer.post('/customer', this.create.bind(this));
    // httpServer.put('/customer/:id', this.update.bind(this));
    // httpServer.del('/customer/:id', this.remove.bind(this));
  }
}
