import { createReducer, on } from "@ngrx/store";
import { addCar } from "./car.actions";
import { Car } from "./car.state";


const carInitialState = {
    car: {
        id: 0,
        name: 'Ford',
        price: 4000
    }
}
export const carReducer = createReducer(
    carInitialState,
    on(addCar, (state, {payload})=>({ car: {...payload}}))
)