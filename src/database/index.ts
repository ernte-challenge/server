import {Connection, createConnection} from 'typeorm';
import {
  Company,
  CompanyImage,
  CompanySession,
  JobOffer,
  Location,
  User,
  UserSession,
} from '../models';

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
      entities: [
        Company,
        CompanyImage,
        CompanySession,
        JobOffer,
        Location,
        User,
        UserSession,
      ],
      autoSchemaSync: true,
      synchronize: true
    } as any);
  }
}
