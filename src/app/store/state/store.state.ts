import * as fromCar from '../car/car.state';
import * as fromFood from '../food';

/**
 * Make a map of states
 */
export interface State {
  food: fromFood.State;
  car: fromCar.State
}