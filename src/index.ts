import {Server} from './server/index';
import 'reflect-metadata';
import {DatabaseProvider} from './database/index';

DatabaseProvider.configure({
  type: process.env.DATABASE_TYPE as any || 'postgres',
  database: process.env.DATABASE_NAME || 'erntechallenge',
  username: process.env.DATABASE_USERNAME || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'erntechallenge',
  host: process.env.DATABASE_HOST || 'localhost',
  port: +process.env.DATABASE_PORT || 5432
});

const server = new Server();
server.start(+process.env.PORT || 8080);
