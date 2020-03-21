import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Example {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public firstName: string;

  @Column()
  public lastName: string;
}
