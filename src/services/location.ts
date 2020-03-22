import {Location, MainAreasOfActivity, WhatYouGet, SearchedProfile} from '../models';
import {getRepository} from 'typeorm';

export class LocationService {


  //export interface FarmLocation {
  //id: string;
  //name: string;
  //whatToDoSubline: string;
  //usersRegistered: number;
  //usersNeeded: number;
  //distance: number;
  //payedPerHour: number;
  //bannerImageSrc: string;
  //bannerImageDescription: string;
  //locationPhoneNumber: string;
  //city: string,
  //zipCode: string
  //houseNumber: string,
  //street: string,
  //mainAreasOfActivity: string[]
  //searchedProfile: string[]
  //whatYouGet: string[]

   public async getLocationById(id: string): Promise<Location | undefined> {
     const location = await getRepository(Location).findOne(id);
     //const mainAreasOfActivity = await getRepository(MainAreasOfActivity).find({ where: { location: id} });
     //const whatYouGet = await getRepository(WhatYouGet).find({ where: { location: id} });
     //const searchedProfile = await getRepository(SearchedProfile).find({ where: { location: id} });


     return location;
   }



  public async create(name: string, whatToDoSubline: string, usersNeeded: number, payedPerHour: number, bannerImageSrc: string,
    bannerImageDescription: string, locationPhoneNumber: string, city: string, zipCode: string, houseNumber: string, street: string, gpsCoordinates: string): Promise<Location | string> {
	if (!name || !whatToDoSubline || !city || !gpsCoordinates || !usersNeeded) {
			throw new Error('MissingParameter');
	}
	const location = new Location();
	location.name = name;
	location.whatToDoSubline = whatToDoSubline;
  location.usersRegistered = 0;
	location.usersNeeded = usersNeeded;
  location.payedPerHour = payedPerHour;
  location.bannerImageSrc = bannerImageSrc;
  location.bannerImageDescription = bannerImageDescription;
  location.locationPhoneNumber = locationPhoneNumber;
  location.city = city;
  location.houseNumber = houseNumber;
  location.street = street;
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
