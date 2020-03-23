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
          "name": "Bauernhof Arentz",
          "whatToDoSubline": "Spargel ernten",
          "usersRegistered": 3,
          "usersNeeded": 10,
          "distance": 20,
          "payedPerHour": 12,
          "bannerImageDescription": "description",
          "locationPhoneNumber": "078612323",
          "city": "Kölle",
          "zipCode": "50623",
          "houseNumber": "19A",
          "street": "Lange Straße",
          "bannerImageSrc": "https://assets.t3n.sc/news/wp-content/uploads/2019/10/microsoft-agrartech-grand-farm.jpg?auto=format&fit=crop&h=348&ixlib=php-2.3.0&w=620",
          "mainAreasOfActivity": [
            "Mithilfe bei der Ernte von Gemüse und Obst",
            "Mithilfe bei der Befüllung",
            "Arbeiten im Freien"
          ],
          "searchedProfile": [
            "Körperliche Fitness",
            "Zuverlässigkeit",
            "Freude an der frischen Luft zu arbeiten"
          ],
          "whatYouGet": [
            "Frische Luft",
            "Unendliche Dankbarkeit für ihr Engagement"
          ]
        },
        {
          "id": "ds32aj3142kfk",
          "name": "Bauernhof Arentz",
          "whatToDoSubline": "Spargel ernten",
          "usersRegistered": 3,
          "usersNeeded": 10,
          "distance": 20,
          "payedPerHour": 12,
          "bannerImageDescription": "description",
          "locationPhoneNumber": "078612323",
          "city": "Kölle",
          "zipCode": "50623",
          "houseNumber": "19A",
          "street": "Lange Straße",
          "bannerImageSrc": "https://assets.t3n.sc/news/wp-content/uploads/2019/10/microsoft-agrartech-grand-farm.jpg?auto=format&fit=crop&h=348&ixlib=php-2.3.0&w=620",
          "mainAreasOfActivity": [
            "Mithilfe bei der Ernte von Gemüse und Obst",
            "Mithilfe bei der Befüllung",
            "Arbeiten im Freien"
          ],
          "searchedProfile": [
            "Körperliche Fitness",
            "Zuverlässigkeit",
            "Freude an der frischen Luft zu arbeiten"
          ],
          "whatYouGet": [
            "Frische Luft",
            "Unendliche Dankbarkeit für ihr Engagement"
          ]
        }
      ]);
    });
    httpServer.get('s/:id', async (req: Request, res: Response): Promise<any> => {
      switch (req.params.id) {
        case 'ds32aj3132kfk': res.send(
          {
            "id": "ds32aj3132kfk",
            "name": "Bauernhof Arentz",
            "whatToDoSubline": "Spargel ernten",
            "usersRegistered": 3,
            "usersNeeded": 10,
            "distance": 20,
            "payedPerHour": 12,
            "bannerImageDescription": "description",
            "locationPhoneNumber": "078612323",
            "city": "Kölle",
            "zipCode": "50623",
            "houseNumber": "19A",
            "street": "Lange Straße",
            "bannerImageSrc": "https://assets.t3n.sc/news/wp-content/uploads/2019/10/microsoft-agrartech-grand-farm.jpg?auto=format&fit=crop&h=348&ixlib=php-2.3.0&w=620",
            "mainAreasOfActivity": [
              "Mithilfe bei der Ernte von Gemüse und Obst",
              "Mithilfe bei der Befüllung",
              "Arbeiten im Freien"
            ],
            "searchedProfile": [
              "Körperliche Fitness",
              "Zuverlässigkeit",
              "Freude an der frischen Luft zu arbeiten"
            ],
            "whatYouGet": [
              "Frische Luft",
              "Unendliche Dankbarkeit für ihr Engagement"
            ]
          }
        );
        break;
        case 'ds32aj3142kfk': res.send(
          {
            "id": "ds32aj3142kfk",
            "name": "Bauernhof Arentz",
            "whatToDoSubline": "Spargel ernten",
            "usersRegistered": 3,
            "usersNeeded": 10,
            "distance": 20,
            "payedPerHour": 12,
            "bannerImageDescription": "description",
            "locationPhoneNumber": "078612323",
            "city": "Kölle",
            "zipCode": "50623",
            "houseNumber": "19A",
            "street": "Lange Straße",
            "bannerImageSrc": "https://assets.t3n.sc/news/wp-content/uploads/2019/10/microsoft-agrartech-grand-farm.jpg?auto=format&fit=crop&h=348&ixlib=php-2.3.0&w=620",
            "mainAreasOfActivity": [
              "Mithilfe bei der Ernte von Gemüse und Obst",
              "Mithilfe bei der Befüllung",
              "Arbeiten im Freien"
            ],
            "searchedProfile": [
              "Körperliche Fitness",
              "Zuverlässigkeit",
              "Freude an der frischen Luft zu arbeiten"
            ],
            "whatYouGet": [
              "Frische Luft",
              "Unendliche Dankbarkeit für ihr Engagement"
            ]
          }
        );
        break;
        default:
        res.send(
          {
            "id": "ds32aj3142kfk",
            "name": "Bauernhof Arentz",
            "whatToDoSubline": "Spargel ernten",
            "usersRegistered": 3,
            "usersNeeded": 10,
            "distance": 20,
            "payedPerHour": 12,
            "bannerImageDescription": "description",
            "locationPhoneNumber": "078612323",
            "city": "Kölle",
            "zipCode": "50623",
            "houseNumber": "19A",
            "street": "Lange Straße",
            "bannerImageSrc": "https://assets.t3n.sc/news/wp-content/uploads/2019/10/microsoft-agrartech-grand-farm.jpg?auto=format&fit=crop&h=348&ixlib=php-2.3.0&w=620",
            "mainAreasOfActivity": [
              "Mithilfe bei der Ernte von Gemüse und Obst",
              "Mithilfe bei der Befüllung",
              "Arbeiten im Freien"
            ],
            "searchedProfile": [
              "Körperliche Fitness",
              "Zuverlässigkeit",
              "Freude an der frischen Luft zu arbeiten"
            ],
            "whatYouGet": [
              "Frische Luft",
              "Unendliche Dankbarkeit für ihr Engagement"
            ]
          }
        );
      }
    });
  }
}
