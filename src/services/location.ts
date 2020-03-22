import {Location} from '../models';
import {getRepository} from 'typeorm';

export class LocationService {

  // public async getLocation(id: string): Promise<Location> {
  //   const location = await getRepository(Location).findOne(locationId);
  //   return location;
  // }
	//
  // public async create(location: Location): Promise<Location | string> {
	// if (location.gpsCoordinates == null){
	// 	return "Coordinates missing!";
	// }
	//
  //   const location = await getRepository(Location).save(location);
  //   return location;
  // }
	//
  // public async update(location: Location): Promise<Location> {
  //   const location = await getRepository(Location).save(location);
  //   return location;
  // }
	//
  // public async delete(location: Location): Promise<Location | undefined> {
  //   return await getRepository(Location).remove(location);
  // }

}

export default new LocationService();
