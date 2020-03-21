import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { JobOffer, Location, CompanyImage } from '.';

@Entity()
export class Company {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ length: 100 })
  public name: string;

  @Column({ length: 30 })
  public phoneNumber: string;

  @Column({ length: 100 })
  public emailAddress: string;

  @Column({ length: 60 })
  public password: string;

  @OneToMany(type => CompanyImage, companyImage => companyImage.company)
  public images: CompanyImage[];

  @OneToMany(type => Location, location => location.company)
  public location: Location[];

  @OneToMany(type => JobOffer, jobOffer => jobOffer.company)
  public jobOffers: JobOffer[];
}
