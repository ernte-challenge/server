import {Column, Entity, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {User} from './user';

@Entity()
export class UserSession {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @ManyToOne(type => User, user => user.id, { nullable: false, onDelete: 'CASCADE' })
  public user: string;

  @Column("timestamp")
  public validTill: Date;
}
