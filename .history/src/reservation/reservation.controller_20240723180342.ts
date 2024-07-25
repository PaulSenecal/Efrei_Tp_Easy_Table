import { Controller, Get, Param } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { Reservation } from 'src/reservation.entity';

@Controller('reservations')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Get('restaurant/:id')
  async getReservationsByRestaurant(@Param('id') id: number): Promise<Reservation[]> {
    return this.reservationService.findReservationsByRestaurant(id);
  }
}
