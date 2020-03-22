import {JobOffer} from '../models';
import {getRepository} from 'typeorm';

export class JobOfferService {

  // public async getJobOffer(id: string): Promise<JobOffer> {
  //   const jobOffer = await getRepository(JobOffer).findOne(jobOfferId);
  //   return jobOffer;
  // }
	//
  
  public async create(typeOfWork: string, startDate: string, endDate: string, startTime: string, endTime: string, helperCount: number, salary: number): Promise<JobOffer | string> {
	if (!typeOfWork || !startDate || !endDate || !helperCount || !salary) {
			throw new Error('MissingParameter');
	}
	const jobOffer = new JobOffer();
	jobOffer.typeOfWork = typeOfWork;
	jobOffer.startDate = startDate;
	jobOffer.endDate = endDate;
	jobOffer.startTime = startTime;
	jobOffer.endTime = endTime;
	jobOffer.helperCount = helperCount;
	jobOffer.salary = salary;
    
	const savedJobOffer = await getRepository(JobOffer).save(jobOffer);
    return savedJobOffer;
  }
	//
  // public async update(jobOffer: JobOffer): Promise<JobOffer> {
  //   const jobOffer = await getRepository(JobOffer).save(jobOffer);
  //   return jobOffer;
  // }
	//
  // public async delete(jobOffer: JobOffer): Promise<JobOffer | undefined> {
  //   return await getRepository(JobOffer).remove(jobOffer);
  // }

}

export default new JobOfferService();
