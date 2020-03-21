import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class JobOffer {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ length: 100 })
  public typeOfWork: string;

  @Column({ length: 10 })
  public startDate: string;

  @Column({ length: 10 })
  public endDate: string;

  @Column({ length: 5 })
  public startTime: string;

  @Column({ length: 5 })
  public endTime: string;

  @Column()
  public helperCount: number;

  @Column()
  public salary: number;
}
