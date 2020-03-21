import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Example {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public firstName: string;

  @Column()
  public lastName: string;
}
