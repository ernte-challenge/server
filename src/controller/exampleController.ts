import {Controller} from './controller';
import {HttpServer} from '../server/httpServer';
import {Request, Response} from 'restify';
import {exampleService} from '../services/example';

export class ExampleController implements Controller {
  public initialize(httpServer: HttpServer): void {
    httpServer.get('/example', async (req: Request, res: Response): Promise<any> => {
      res.send(await exampleService.list());
    });
    httpServer.get('/example/:id', async (req: Request, res: Response): Promise<any> => {
      const customer = await exampleService.getById(req.params.id);
      res.send(customer ? 200 : 404, customer);
    });
    httpServer.post('/customer', this.create.bind(this));
    httpServer.put('/customer/:id', this.update.bind(this));
    httpServer.del('/customer/:id', this.remove.bind(this));
  }

  private async create(req: Request, res: Response): Promise<void> {
    res.send(await exampleService.create(req.body));
  }

  private async update(req: Request, res: Response): Promise<void> {
    res.send(await exampleService.update({...req.body, id: req.params.id}));
  }

  private async remove(req: Request, res: Response): Promise<void> {
    res.send(await exampleService.delete(req.params.id));
  }
}
