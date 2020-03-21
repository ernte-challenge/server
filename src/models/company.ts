import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ length: 100 })
  public name: string;

  @Column({ length: 30 })
  public phoneNumber: string;

  @Column({ length: 100 })
  public emailAddress: string;

  @Column({ length: 60 })
  public password: string;

  @Column()
  public image: string;
}
