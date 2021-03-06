import {HttpServer} from './httpServer';
import {RequestHandler, Server as RestifyServer, Request, Response, Next} from 'restify';
import * as restify from 'restify';
import * as CookieParser from 'restify-cookies';
import {CONTROLLERS} from '../controller';

const ErrorHandler = (requestHandler: Function) => async (req: Request, res: Response, next: Next) => {
  let handler;
  try {
    handler = await requestHandler(req, res, next);
  } catch (e) {
    next(e);
  }
  return handler;
}

export class Server implements HttpServer {
  private restify: RestifyServer;
  private prefix: string = '';

  public setPrefix(prefix: string) {
    this.prefix = prefix;
  }

  public get(url: string, requestHandler: RequestHandler): void {
    this.addRoute('get', url, requestHandler);
  }

  public post(url: string, requestHandler: RequestHandler): void {
    this.addRoute('post', url, requestHandler);
  }

  public del(url: string, requestHandler: RequestHandler): void {
    this.addRoute('del', url, requestHandler);
  }

  public put(url: string, requestHandler: RequestHandler): void {
    this.addRoute('put', url, requestHandler);
  }

  private addRoute(method: 'get' | 'post' | 'put' | 'del', url: string, requestHandler: RequestHandler): void {
    const errorRequestHandler = ErrorHandler(requestHandler);
    this.restify[method](`${this.prefix}${url}`, errorRequestHandler);
  }

  public start(port: number): void {
    this.restify = restify.createServer();
    this.restify.use(restify.plugins.queryParser());
    this.restify.use(restify.plugins.bodyParser());
    this.restify.use(CookieParser.parse);

    this.addControllers();

    this.restify.listen(port, () => console.log(`Server is up & running on port ${port}`));
  }

  private addControllers(): void {
    CONTROLLERS.forEach(controller => {
      // Prefix vor jedem initialize resetten, um unerwartete Sideeffects zu verhindern
      this.prefix = '';
      controller.initialize(this)
    });
  }
}
