import {Company} from '../models';
import {getRepository} from 'typeorm';

export class CompanyService {
	
  public async getCompany(id: string): Promise<Company> {
    const company = await getRepository(Company).findOne(companyId);    
    return company;
  }
  
  public async getAll(): Promise<Company[]> {
    const company = await getRepository(Company).find();    
    return company;
  }
  
  public async findByName(name: string): Promise<Company[] | undefined> {
    const company = await getRepository(Company).find({ where: { name: name } });    
    return company;
  }

  public async create(company: Company): Promise<Company | string> {
	if (company.name == null){
		return "Name cannot be empty!";
	}
	if (company.emailAddress == null){
		return "eMail cannot be empty!";
	}
	if (company.password == null){
		return "Password cannot be empty!";
	}
	
    const company = await getRepository(Company).save(company);    
    return company;
  }

  public async update(company: Company): Promise<Company> {
    const company = await getRepository(Company).save(company);    
    return company;
  }
  
  public async delete(company: Company): Promise<Company | undefined> {
    return await getRepository(Company).remove(company);    
  }
  
}

export default new CompanyService();
