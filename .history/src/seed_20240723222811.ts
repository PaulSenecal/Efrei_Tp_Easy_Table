import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getRepository } from 'typeorm';
import { Restaurant } from './restaurant.entity';
import { Client } from './client.entity';
import { Reservation } from './/reservation.entity';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const restaurantRepository = getRepository(Restaurant);
  const clientRepository = getRepository(Client);
  const reservationRepository = getRepository(Reservation);

  const restaurant1 = restaurantRepository.create({ name: 'Le Gourmet', totalPlaces: 50 });
  const restaurant2 = restaurantRepository.create({ name: 'Chez Pierre', totalPlaces: 30 });
  
  await restaurantRepository.save([restaurant1, restaurant2]);

  const client1 = clientRepository.create({ firstName: 'John', lastName: 'Doe' });
  const client2 = clientRepository.create({ firstName: 'Jane', lastName: 'Smith' });

  await clientRepository.save([client1, client2]);

  const reservation1 = reservationRepository.create({ restaurantId: restaurant1.id, clientId: client1.id, date: new Date('2024-08-01'), numberOfPeople: 2 });
  const reservation2 = reservationRepository.create({ restaurantId: restaurant2.id, clientId: client2.id, date: new Date('2024-08-02'), numberOfPeople: 4 });

  await reservationRepository.save([reservation1, reservation2]);

  await app.close();
}

bootstrap().then(() => console.log('Seed completed')).catch(error => console.error('Seed failed', error));
