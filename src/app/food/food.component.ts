// src/app/food/food.component.ts

import {Food} from '../models/food.model';
import {FoodService} from './food.service';
import {Observable} from 'rxjs';
import { Component } from '@angular/core';


@Component({
  selector: 'app-food-box',
  templateUrl: './food.component.html'
})
export class FoodComponent {
  constructor(
    private foodService: FoodService
  ) {

  }

  getFoods(): Observable<Food[]> {
    return this.foodService.foods$;
  }

  onFoodCreate(foodName: HTMLInputElement) {
    if (!foodName.value) {
      return;
    }

    this.foodService.createFood(foodName.value);

    foodName.value = "";
  }

  onFoodRemove(food: Food) {
    this.foodService.removeFood(food);
  }
}
