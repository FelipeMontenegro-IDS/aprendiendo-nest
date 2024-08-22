import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { CarsService } from './cars/cars.service';
import { Item } from './models/Item';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly carService: CarsService) { }


  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("cars")
  getAllCars(): Item[] {
    return this.carService.getAllCars();
  }

  @Get("cars/:id")
  getCarById(@Param("id",ParseIntPipe) id: number): Item {
    return this.carService.getCarById(id);
  }
}
