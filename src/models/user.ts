import {Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity} from 'typeorm';
import {UserSession} from ".";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ length: 50 })
  public firstName: string;

  @Column({ length: 50 })
  public lastName: string;

  @Column({ length: 1, nullable: true })
  public sex: string;

  @Column({ length: 30, nullable: true })
  public phoneNumber: string;

  @Column({ length: 100, unique: true })
  public emailAddress: string;

  @Column({ length: 60 })
  public password: string;

  @Column({ nullable: true })
  public voluntary: boolean;

  @Column({ nullable: true })
  public image: string;

  @OneToMany(type => UserSession, userSession => userSession.user)
  userSessions: UserSession[];
}
