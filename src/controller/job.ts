import {Controller} from './controller';
import {HttpServer} from '../server/httpServer';
import {Request, Response} from 'restify';

export default class JobController implements Controller {
  public initialize(httpServer: HttpServer): void {
    httpServer.setPrefix('/job');
    httpServer.get('s', async (req: Request, res: Response): Promise<any> => {
      res.send([
        {
          "id": "mlm43k4j3",
          "startDate": "2020-03-22",
          "endDate": "2021-03-22T",
          "location": {
            "id": "ds32aj3132kfk",
            "name": "Bauernhof Arentz",
            "whatToDoSubline": "Spargel ernten",
            "usersRegistered": 3,
            "usersNeeded": 10,
            "distance": 20,
            "salary": 12,
            "imageUrl": "https://assets.t3n.sc/news/wp-content/uploads/2019/10/microsoft-agrartech-grand-farm.jpg?auto=format&fit=crop&h=348&ixlib=php-2.3.0&w=620"
          }
        },
        {
          "id": "213233223fdsff",
          "startDate": "2020-03-22",
          "endDate": "2021-03-22T",
          "location": {
            "id": "kl4j3i4jfk",
            "name": "Bauernhof Mustermann",
            "whatToDoSubline": "Erdbeeren ernten",
            "usersRegistered": 3,
            "usersNeeded": 10,
            "distance": 20,
            "salary": 12,
            "imageUrl": "https://assets.t3n.sc/news/wp-content/uploads/2019/10/microsoft-agrartech-grand-farm.jpg?auto=format&fit=crop&h=348&ixlib=php-2.3.0&w=620"
          }
        }
      ]);
    });
  }
}
