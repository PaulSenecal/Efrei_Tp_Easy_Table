// src/reservation/reservation.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reservation } from './reservation.entity';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { Restaurant } from '../restaurant/restaurant.entity';
import { Client } from '../client/client.entity';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Reservation)
    private reservationRepository: Repository<Reservation>,

    @InjectRepository(Restaurant)
    private restaurantRepository: Repository<Restaurant>,

    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) {}

  findAll(): Promise<Reservation[]> {
    return this.reservationRepository.find({ relations: ['restaurant', 'client'] });
  }

  findOne(id: number): Promise<Reservation> {
    return this.reservationRepository.findOne({ where: { id }, relations: ['restaurant', 'client'] });
  }

  async remove(id: number): Promise<void> {
    await this.reservationRepository.delete(id);
  }

  async create(createReservationDto: CreateReservationDto): Promise<Reservation> {
    const { restaurantId, clientId, date, numberOfPeople } = createReservationDto;

    const restaurant = await this.restaurantRepository.findOne({ where: { id: restaurantId } });
    const client = await this.clientRepository.findOne({ where: { id: clientId } });

    const reservation = this.reservationRepository.create({
      restaurantId,
      clientId,
      date,
      numberOfPeople,
      restaurant,
      client,
    });

    return this.reservationRepository.save(reservation);
  }
}
