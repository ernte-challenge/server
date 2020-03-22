import {MainAreasOfActivity} from '../models';
import {getRepository} from 'typeorm';


export class MainAreasOfActivityService {

  public async getMainAreasOfActivityById(id: string): Promise<MainAreasOfActivity | undefined> {
    const mainAreasOfActivity = await getRepository(MainAreasOfActivity).findOne(id);
    return mainAreasOfActivity;
  }

  public async createMainAreasOfActivity(name: string, location: string): Promise<MainAreasOfActivity> {
		if (!name || location) {
			throw new Error('MissingParameter');
		}
		const mainAreasOfActivity = new MainAreasOfActivity();
		mainAreasOfActivity.name = name;
    mainAreasOfActivity.location = location;
    const savedMainAreasOfActivity = await getRepository(MainAreasOfActivity).save(mainAreasOfActivity);
    return savedMainAreasOfActivity;
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

export default new MainAreasOfActivityService();
