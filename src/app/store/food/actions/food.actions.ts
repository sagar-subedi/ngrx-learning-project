// src/app/store/food/actions/food.actions.ts

import {Action, createAction, props} from "@ngrx/store";
import {Food} from "../../../models/food.model";
export const createFood = createAction(
  '[Food] Create',
  props<{ payload: Food }>()
);

export const createFoodSuccess = createAction(
  '[Food] Create success',
  props<{ payload: Food }>()
);

export const removeFood = createAction(
  '[Food] Remove',
  props<{ payload: number }>()
);

export type FoodAction = ReturnType<typeof createFood | typeof createFoodSuccess | typeof removeFood>;