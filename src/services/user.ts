import {User, UserSession} from '../models';
import {getRepository} from 'typeorm';

export class UserService {
	
  public async getUser(id: string): Promise<User> {
    const user = await getRepository(User).findOne(userId);    
    return user;
  }

  public async create(user: User): Promise<User | string> {
	if (user.name == null){
		return "Name cannot be empty!";
	}
	if (user.emailAddress == null){
		return "eMail cannot be empty";
	}
	if (user.password == null){
		return "Password cannot be empty";
	}
	
    const user = await getRepository(User).save(user);    
    return user;
  }

  public async update(user: User): Promise<User> {
    const user = await getRepository(User).save(user);    
    return user;
  }
  
  public async delete(user: User): Promise<User | undefined> {
    return await getRepository(User).remove(user);    
  }
  
}

export default new UserService();
