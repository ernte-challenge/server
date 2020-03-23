import {User, UserSession} from '../models';
import {getRepository} from 'typeorm';
import {hashText, validateText} from '../util/crypt';

export class UserService {
	public getUserByEmailAddress(emailAddress: string): Promise<User> {
	  return getRepository(User).findOne({ emailAddress: emailAddress.toLowerCase() });
	}

  public async createUser(firstName: string, lastName: string, emailAddress: string, password: string): Promise<User> {
		if (!firstName || !lastName || !emailAddress || !password) {
			throw new Error('MissingParameter');
		}
		const cryptedPassword = await hashText(password);
		const user = new User();
		user.firstName = firstName;
		user.lastName = lastName;
		user.emailAddress = emailAddress.toLowerCase();
		user.password = cryptedPassword;
    const savedUser = await getRepository(User).save(user);
    return savedUser;
  }

	public validatePassword(user: User, password: string): Promise<boolean> {
		return validateText(password, user.password);
	}
	//
  // public async update(user: User): Promise<User> {
  //   const user = await getRepository(User).save(user);
  //   return user;
  // }
	//
  // public async delete(user: User): Promise<User | undefined> {
  //   return await getRepository(User).remove(user);
  // }

}

export default new UserService();
