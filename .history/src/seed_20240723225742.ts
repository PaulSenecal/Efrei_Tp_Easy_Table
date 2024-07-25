import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module'; // Change this line to use relative path
import { getConnection } from 'typeorm';
import { Client } from './client/client.entity';
import { Restaurant } from './restaurant/restaurant.entity';
import { Reservation } from './reservation/reservation.entity';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const connection = getConnection();

  // Populate Clients
  const clientRepository = connection.getRepository(Client);
  const clients = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Jane', lastName: 'Smith' },
  ];
  await clientRepository.save(clients);

  // Populate Restaurants
  const restaurantRepository = connection.getRepository(Restaurant);
  const restaurants = [
    { name: 'Chez Pierre', totalPlaces: 50 },
    { name: 'La Bonne Table', totalPlaces: 30 },
  ];
  await restaurantRepository.save(restaurants);

  // Populate Reservations
  const reservationRepository = connection.getRepository(Reservation);
  const reservations = [
    { restaurantId: 1, clientId: 1, date: new Date('2024-08-01'), numberOfPeople: 4 },
    { restaurantId: 2, clientId: 2, date: new Date('2024-08-02'), numberOfPeople: 2 },
  ];
  await reservationRepository.save(reservations);

  await app.close();
}

bootstrap();
