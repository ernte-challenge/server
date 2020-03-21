import {User} from '../models';
import {DatabaseProvider} from '../database/index';

export class ExampleService {
  public async getById(id: number): Promise<User> {
    const connection = await DatabaseProvider.getConnection();
    return await connection.getRepository(User).findOne(id);
  }

  public async create(customer: User): Promise<User> {
    // Normally DTO !== DB-Entity, so we "simulate" a mapping of both
    const newCustomer = new User();
    newCustomer.name = customer.name;

    const connection = await DatabaseProvider.getConnection();
    return await connection.getRepository(User).save(newCustomer);
  }

  public async list(): Promise<User[]> {
    const connection = await DatabaseProvider.getConnection();
    return await connection.getRepository(User).find();
  }

  public async update(customer: User): Promise<User> {
    console.log(customer);
    const connection = await DatabaseProvider.getConnection();
    const repository = connection.getRepository(User);
    const entity = await repository.findOne(customer.id);
    return await repository.save(entity);
  }

  public async delete(id: number): Promise<void> {
    const connection = await DatabaseProvider.getConnection();
    await connection.getRepository(User).delete(id);
  }
}

export const exampleService = new ExampleService();
