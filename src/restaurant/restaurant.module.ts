import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './restaurant.entity';
import { RestaurantService } from './restaurant.service';
import { RestaurantController } from './restaurant.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurant])],
  providers: [RestaurantService],
  controllers: [RestaurantController],
  exports: [TypeOrmModule], // Export TypeOrmModule to use in other modules
})
export class RestaurantModule {}
