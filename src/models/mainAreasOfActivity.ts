import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, BaseEntity} from 'typeorm';
import {Location} from ".";

@Entity()
export class MainAreasOfActivity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ length: 100 })
  public name: string;

  @ManyToOne(type => Location, location => location.id, { nullable: false, onDelete: 'CASCADE' })
  public location: string;
}
