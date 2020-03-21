import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {Company} from ".";

@Entity()
export class CompanyImage {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ length: 255 })
  public fileName: string;

  @ManyToOne(type => Company, company => company.id)
  public company: string;

}
