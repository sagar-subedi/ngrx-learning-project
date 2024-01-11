import * as fromFood from './food';
import {createSelector} from '@ngrx/store';
import {FoodEffects} from './food/effects/food.effects';
import { carReducer } from './car/car.reducer';
import * as formCar from './car/car.state';

/**
 * Make a map of states
 */
export interface State {
  food: fromFood.State;
  car: formCar.State
}

/**
 * Make a map of reducers
 */
export const reducers = {
  food: fromFood.foodReducer,
  car: carReducer
};

/**
 * Export selectors
 */

export * from './selectors/store.selectors';

/**
 * Export effects
 */
export const rootEffects = [FoodEffects];