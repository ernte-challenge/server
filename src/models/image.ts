import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {User} from "./User";

@Entity()
export class Image {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ length: 255 })
  public fileName: string;

  @Column({ length: 100 })
  public companyId: string;
  
  @ManyToOne(type => User, user => user.images)
  public user: User;
}
