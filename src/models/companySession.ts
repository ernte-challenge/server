import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {Company} from '.';

@Entity()
export class CompanySession {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @ManyToOne(type => Company, company => company.id)
  @Column('uuid')
  public company: string
}
