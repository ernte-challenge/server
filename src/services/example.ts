import {Example} from '../models/example';
import {DatabaseProvider} from '../database/index';

export class ExampleService {
  public async getById(id: number): Promise<Example> {
    const connection = await DatabaseProvider.getConnection();
    return await connection.getRepository(Example).findOne(id);
  }

  public async create(customer: Example): Promise<Example> {
    // Normally DTO !== DB-Entity, so we "simulate" a mapping of both
    const newCustomer = new Example();
    newCustomer.firstName = customer.firstName;
    newCustomer.lastName = customer.lastName;

    const connection = await DatabaseProvider.getConnection();
    return await connection.getRepository(Example).save(newCustomer);
  }

  public async list(): Promise<Example[]> {
    const connection = await DatabaseProvider.getConnection();
    return await connection.getRepository(Example).find();
  }

  public async update(customer: Example): Promise<Example> {
    console.log(customer);
    const connection = await DatabaseProvider.getConnection();
    const repository = connection.getRepository(Example);
    const entity = await repository.findOne(customer.id);
    entity.firstName = customer.firstName;
    entity.lastName = customer.lastName;
    return await repository.save(entity);
  }

  public async delete(id: number): Promise<void> {
    const connection = await DatabaseProvider.getConnection();
    await connection.getRepository(Example).delete(id);
  }
}

export const exampleService = new ExampleService();
