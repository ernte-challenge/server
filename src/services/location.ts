import {Location} from '../models';
import {getRepository} from 'typeorm';

export class LocationService {

  // public async getLocation(id: string): Promise<Location> {
  //   const location = await getRepository(Location).findOne(locationId);
  //   return location;
  // }
	//
  
  public async create(name: street, zipCode: string, city: string, gpsCoordinates: string): Promise<Location | string> {
	if (!city || !gpsCoordinates) {
			throw new Error('MissingParameter');
	}
	const location = new Location();
	location.street = street;
	location.zipCode = zipCode;
	location.city = city;
	location.gpsCoordinates = gpsCoordinates;
    
	const savedLocation = await getRepository(Location).save(location);
    return savedLocation;
  }
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
