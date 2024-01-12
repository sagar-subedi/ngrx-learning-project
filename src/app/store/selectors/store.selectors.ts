// src/app/store/selectors/store.selectors.ts

import * as fromFood from '../food';
import * as fromCar from '../car/car.state'
import {State} from '../state/store.state';
// import * as fromRoot from '../'
import {createSelector} from '@ngrx/store';

/**
 * Export selectors
 */

export const getFood = (state: State) => state.food;
export const getFoods = createSelector(getFood, fromFood.getFoods);

export const getCar = createSelector(
    (state: State)=> state.car,
    (state: fromCar.State)=> state.car
)   