import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Location {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ length: 100 })
  public street: string;

  @Column({ length: 10 })
  public zipCode: string;

  @Column({ length: 100 })
  public city: string;

  @Column({ length: 30 })
  public gpsCoordinates: string;
}