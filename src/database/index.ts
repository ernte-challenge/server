import {Connection, createConnection} from 'typeorm';
import {User, UserSession} from '../models';

export interface DatabaseConfiguration {
  type: 'postgres' | 'mysql' | 'mssql';
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

export class DatabaseProvider {
  public static initialize(databaseConfiguration: DatabaseConfiguration): Promise<Connection> {
    const { type, host, port, username, password, database } = databaseConfiguration;
    return createConnection({
      type, host, port, username, password, database,
      entities: [User, UserSession],
      autoSchemaSync: true,
      synchronize: true
    } as any);
  }
}
