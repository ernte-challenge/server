import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {Company} from '.';

@Entity()
export class CompanySession {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @ManyToOne(type => Company, company => company.id, { nullable: false, onDelete: 'CASCADE' })
  public company: string
}
