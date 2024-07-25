import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from './restaurant.entity';

@Controller('restaurants')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Get()
  findAll(): Promise<Restaurant[]> {
    return this.restaurantService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Restaurant> {
    return this.restaurantService.findOne(id);
  }

  @Post()
  create(@Body() restaurant: Restaurant): Promise<Restaurant> {
    return this.restaurantService.create(restaurant);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.restaurantService.remove(id);
  }
}
