import {Controller} from './controller';
import {HttpServer} from '../server/httpServer';
import {Request, Response} from 'restify';

export default class LocationController implements Controller {
  public initialize(httpServer: HttpServer): void {
    httpServer.setPrefix('/location');
    httpServer.get('s', async (req: Request, res: Response): Promise<any> => {
      res.send([
        {
          "id": "ds32aj3132kfk",
          "name": "loc 1",
          "whatToDoSubline": "spargel ernten",
          "usersRegistered": 3,
          "usersNeeded": 10,
          "distance": 20,
          "salary": 12,
          "imageUrl": "https://assets.t3n.sc/news/wp-content/uploads/2019/10/microsoft-agrartech-grand-farm.jpg?auto=format&fit=crop&h=348&ixlib=php-2.3.0&w=620"
        },
        {
          "id": "kl4j3i4jfk",
          "name": "loc 2",
          "whatToDoSubline": "erdbeeren ernten",
          "usersRegistered": 3,
          "usersNeeded": 10,
          "distance": 20,
          "salary": 12,
          "imageUrl": "https://assets.t3n.sc/news/wp-content/uploads/2019/10/microsoft-agrartech-grand-farm.jpg?auto=format&fit=crop&h=348&ixlib=php-2.3.0&w=620"
        }
      ]);
    });
  }
}
