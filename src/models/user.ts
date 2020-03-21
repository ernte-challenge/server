import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import {UserSession} from ".";

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ length: 100 })
  public name: string;

  @Column({ length: 1 })
  public sex: string;

  @Column({ length: 30 })
  public phoneNumber: string;

  @Column({ length: 100 })
  public emailAddress: string;

  @Column({ length: 60 })
  public password: string;

  @Column()
  public voluntary: boolean;

  @Column()
  public image: string;

  @OneToMany(type => UserSession, userSession => userSession.user)
  userSessions: UserSession[];
}
