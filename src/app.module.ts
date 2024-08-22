import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsService } from './cars/cars.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CarsService],
})
export class AppModule {}
