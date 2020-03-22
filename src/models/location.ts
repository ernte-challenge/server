import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import { Company } from './company';

@Entity()
export class Location {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ length: 100 })
  public name: string;

  @Column({ length: 100 })
  public whatToDoSubline: string;

  @Column()
  public usersRegistered: number;

  @Column()
  public usersNeeded: number;

  @Column({ length: 30 })
  public gpsCoordinates: string;

  @Column()
  public payedPerHour: number;

  @Column({ length: 100 })
  public bannerImageSrc: string;

  @Column({ length: 100 })
  public bannerImageDescription: string;

  @Column({ length: 100 })
  public locationPhoneNumber: string;

  @Column({ length: 100 })
  public city: string;

  @Column({ length: 100 })
  public zipCode: string;

  @Column({ length: 100 })
  public houseNumber: string;

  @Column({ length: 100 })
  public street: string;

  @OneToMany(type => MainAreasOfActivity, mainAreasOfActivity => mainAreasOfActivity.mainAreasOfActivity)
  mainAreasOfActivity: MainAreasOfActivity[];

  @ManyToOne(type => Company, company => company.id, { nullable: false, onDelete: 'CASCADE' })
  public company: Company;
}
