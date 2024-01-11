import { createAction, props } from "@ngrx/store";
import { Car } from "./car.state";


export const addCar = createAction(
    '[Car] Add',
    props<{payload: Car}>()
)