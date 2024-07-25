import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Reservation } from './reservation/reservation.entity';


@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  placesTotales: number;

  @OneToMany(() => Reservation, (reservation) => reservation.restaurant)
  reservations: Reservation[];
}
