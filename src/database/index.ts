import {Connection, createConnection} from 'typeorm';
import {Example} from '../models/example';

export interface DatabaseConfiguration {
  type: 'postgres' | 'mysql' | 'mssql';
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

export class DatabaseProvider {
  private static connection: Connection;
  private static configuration: DatabaseConfiguration;

  public static configure(databaseConfiguration: DatabaseConfiguration): void {
    DatabaseProvider.configuration = databaseConfiguration;
  }

  public static async getConnection(): Promise<Connection> {
    if (DatabaseProvider.connection) {
      return DatabaseProvider.connection;
    }

    if (!DatabaseProvider.configuration) {
      throw new Error('DatabaseProvider is not configured yet.');
    }

    const { type, host, port, username, password, database } = DatabaseProvider.configuration;
    DatabaseProvider.connection = await createConnection({
      type, host, port, username, password, database,
      entities: [Example],
      autoSchemaSync: true,
      synchronize: true
    } as any);

    return DatabaseProvider.connection;
  }
}
