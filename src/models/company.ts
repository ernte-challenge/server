import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { JobOffer } from './jobOffer';
import { Location } from './location';

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

  @Column()
  public image: string;

  @OneToMany(type => Location, location => location.id)
  public location: Location[];

  @OneToMany(type => JobOffer, jobOffer => jobOffer.id)
  public jobOffers: JobOffer[];
}
