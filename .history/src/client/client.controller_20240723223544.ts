import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ClientService } from './client.service';
import { Client } from './client.entity';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  findAll(): Promise<Client[]> {
    return this.clientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Client> {
    return this.clientService.findOne(id);
  }

  @Post()
  create(@Body() client: Client): Promise<Client> {
    return this.clientService.create(client);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.clientService.remove(id);
  }
}
