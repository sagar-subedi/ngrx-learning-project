import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class ApiService {
  constructor() {

  }

  run(foodName: string) {
    return new Observable(observer => {
      observer.next(foodName ? foodName.toUpperCase() : 'NO FOOD :(');
    });
  }
}