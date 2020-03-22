import {SearchedProfile} from '../models';
import {getRepository} from 'typeorm';


export class SearchedProfileService {

  public async createSearchedProfile(name: string, location: string): Promise<SearchedProfile> {
		if (!name || location) {
			throw new Error('MissingParameter');
		}
		const searchedProfile = new SearchedProfile();
		searchedProfile.name = name;
    searchedProfile.location = location;
    const savedSearchedProfile = await getRepository(SearchedProfile).save(searchedProfile);
    return savedSearchedProfile;
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

export default new SearchedProfileService();
