import UserController from './user';
import LocationController from './location';
import JobController from './job';

export const CONTROLLERS = [
  new UserController(),
  new LocationController(),
  new JobController(),
];
