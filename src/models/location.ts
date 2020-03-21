import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import { Company } from './company';

@Entity()
export class Location {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ length: 100 })
  public street: string;

  @Column({ length: 10 })
  public zipCode: string;

  @Column({ length: 100 })
  public city: string;

  @Column({ length: 30 })
  public gpsCoordinates: string;

  @ManyToOne(type => Company, company => company.id, { nullable: false, onDelete: 'CASCADE' })
  public company: Company;
}
