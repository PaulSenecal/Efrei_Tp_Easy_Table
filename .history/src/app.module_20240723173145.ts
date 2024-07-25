import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './restaurant.entity';
import { Client } from './client.entity';
import { Reservation } from './reservation.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // ou 'mysql' pour MySQL
      host: 'localhost',
      port: 3306, // 3306 pour MySQL
      username: 'root',
      password: 'root',
      database: 'restaurant_reservation',
      entities: [Restaurant, Client, Reservation],
      synchronize: true, // En production, utilisez les migrations au lieu de synchronize: true
    }),
    TypeOrmModule.forFeature([Restaurant, Client, Reservation]),
  ],
})
export class AppModule {}
