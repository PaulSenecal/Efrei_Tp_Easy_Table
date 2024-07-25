// src/reservation/dto/create-reservation.dto.ts
import { IsInt, IsDate, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateReservationDto {
  @IsInt()
  restaurantId: number;

  @IsInt()
  clientId: number;

  @IsDate()
  @Type(() => Date)
  date: Date;

  @IsInt()
  numberOfPeople: number;
}
