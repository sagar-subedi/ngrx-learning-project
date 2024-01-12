// src/app/store/food/reducers/food.reducers.tsimport { createReducer, on } from '@ngrx/store';
import { toInteger, uniqueId } from 'lodash';
import * as foodActions from '../actions/food.actions'; // Corrected import statement
import { Food } from '../../../models/food.model';
import { initialState } from '../state/food.state';
import { createReducer, on } from '@ngrx/store';

export const foodReducer = createReducer(
  initialState,

  on(foodActions.createFood, (state, { payload }) => ({
    ...state,
    foods: [...state.foods, { ...payload, id: toInteger(uniqueId()) }]
  })
  ),

  on(foodActions.createFoodSuccess, (state, { payload }) => ({
    ...state,
    foods: state.foods.map(food =>
      food.name.toUpperCase() === payload.toString()
        ? { ...food, name: payload.toString() }
        : { ...food }
    )
  })),

  on(foodActions.removeFood, (state, { payload }) => ({
    ...state,
    foods: state.foods.filter(f => f.id !== payload)
  }))
);
