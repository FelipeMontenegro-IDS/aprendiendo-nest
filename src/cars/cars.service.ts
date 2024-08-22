import { Injectable, NotFoundException } from '@nestjs/common';
import { Item } from 'src/models/Item';

@Injectable()
export class CarsService {

    private readonly _cars: Item[] = [
        {
            id: 1,
            value: "carro 1"
        }, {
            id: 2,
            value: "carro 2"
        }, {
            id: 3,
            value: "carro 3",
        }, {
            id: 4,
            value: "carro 4"
        },
        {
            id: 5,
            value: "carro 5"
        }
    ];

    getAllCars(): Item[] {
        return this._cars;
    }

    getCarById(id: number): Item {
        const car  = this._cars.find(x => x.id === id);
        if(!car) throw new NotFoundException(`Car with id '${id}' not found`);
        return  car;
    }
}
