import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { CarService } from './car.service';
import { Car } from '../store/car/car.state';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  count = interval(1000);

  setCar(carName:HTMLInputElement): void {

    this.carService.setCar(carName.value);

  }

  getCar():Observable<Car> {
    return this.carService.car$;
  }

  constructor(private carService: CarService){

  }

}
