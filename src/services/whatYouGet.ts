import {WhatYouGet} from '../models';
import {getRepository} from 'typeorm';


export class WhatYouGetService {

  public async createWhatYouGet(name: string, location: string): Promise<WhatYouGet> {
		if (!name || !location) {
			throw new Error('MissingParameter');
		}
		const whatYouGet = new WhatYouGet();
		whatYouGet.name = name;
    whatYouGet.location = location;
    const savedWhatYouGet = await getRepository(WhatYouGet).save(whatYouGet);
    return savedWhatYouGet;
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

export default new WhatYouGetService();
