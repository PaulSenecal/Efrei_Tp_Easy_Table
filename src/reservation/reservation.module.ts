import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservationService } from './reservation.service';
import { ReservationController } from './reservation.controller';
import { Reservation } from './reservation.entity';
import { Restaurant } from '../restaurant/restaurant.entity';
import { Client } from '../client/client.entity';
import { RestaurantModule } from '../restaurant/restaurant.module';
import { ClientModule } from '../client/client.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Reservation, Restaurant, Client]),
    RestaurantModule,
    ClientModule,
  ],
  providers: [ReservationService],
  controllers: [ReservationController],
})
export class ReservationModule {}
