import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reservation } from './reservation.entity';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Reservation)
    private reservationRepository: Repository<Reservation>,
  ) {}

  findAll(): Promise<Reservation[]> {
    return this.reservationRepository.find({ relations: ['restaurant', 'client'] });
  }

  findOne(id: number): Promise<Reservation> {
    return this.reservationRepository.findOne({ where: { id }, relations: ['restaurant', 'client'] });
  }

  create(reservation: Reservation): Promise<Reservation> {
    return this.reservationRepository.save(reservation);
  }

  async remove(id: number): Promise<void> {
    await this.reservationRepository.delete(id);
  }
}
