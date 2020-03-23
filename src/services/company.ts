import {Company} from '../models';
import {hashText} from '../util/crypt';
import {getRepository} from 'typeorm';

export class CompanyService {

  // public async getCompany(id: string): Promise<Company> {
  //   const company = await getRepository(Company).findOne(companyId);
  //   return company;
  // }
	//
  // public async getAll(): Promise<Company[]> {
  //   const company = await getRepository(Company).find();
  //   return company;
  // }
	//
  // public async findByName(name: string): Promise<Company[] | undefined> {
  //   const company = await getRepository(Company).find({ where: { name: name } });
  //   return company;
  // }
	//
  public async create(name: string, phoneNumber: string, emailAddress: string, password: string): Promise<Company | string> {
	if (!name || !phoneNumber || !emailAddress || !password) {
			throw new Error('MissingParameter');
	}
	const cryptedPassword = await hashText(password);
	const company = new Company();
	company.name = name;
	company.phoneNumber = phoneNumber;
	company.emailAddress = emailAddress;
	company.password = cryptedPassword;

	const savedCompany = await getRepository(Company).save(company);
    return savedCompany;
  }
	//
  // public async update(company: Company): Promise<Company> {
  //   const company = await getRepository(Company).save(company);
  //   return company;
  // }
	//
  // public async delete(company: Company): Promise<Company | undefined> {
  //   return await getRepository(Company).remove(company);
  // }

}

export default new CompanyService();
