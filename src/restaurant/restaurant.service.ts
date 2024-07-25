import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Restaurant } from './restaurant.entity';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurant)
    private restaurantRepository: Repository<Restaurant>,
  ) {}

  findAll(): Promise<Restaurant[]> {
    return this.restaurantRepository.find();
  }

  findOne(id: number): Promise<Restaurant> {
    return this.restaurantRepository.findOneBy({ id });
  }

  create(restaurant: Restaurant): Promise<Restaurant> {
    return this.restaurantRepository.save(restaurant);
  }

  async remove(id: number): Promise<void> {
    await this.restaurantRepository.delete(id);
  }
}
