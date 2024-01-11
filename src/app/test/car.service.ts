import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromRoot from "../store"
import { addCar } from '../store/car/car.actions';
import { Observable } from 'rxjs';
import { Car } from '../store/car/car.state';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  car$: Observable<Car>;

  constructor(private store: Store<fromRoot.State>) {
    this.car$ = store.pipe(select(fromRoot.getCar));
   }

  public setCar(name: string){
    this.store.dispatch(
      addCar({
        payload: {
          id:4, name, price:700
        }
      })
    )
  }
}
