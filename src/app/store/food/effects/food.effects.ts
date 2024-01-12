// src/app/store/food/effects/food.effects.ts
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as foodActions from '../actions/food.actions'; // Updated import statement
import { map, switchMap } from 'rxjs/operators';
import { ApiService } from '../../../api/api.service';
import { Food } from '../../../models/food.model';

@Injectable()
export class FoodEffects {

  constructor(
    private actions$: Actions,
    private apiService: ApiService
  ) {}

  run$ = createEffect(() =>
    this.actions$.pipe(
      ofType(foodActions.createFood), // Corrected action reference
      map(action => action.payload),
      switchMap(payload =>
        this.apiService.run(payload ? payload.name : 'null').pipe(
          map((result) => foodActions.createFoodSuccess({ payload: result as Food })) // Explicit casting
        )
      )
    )
  );
}


//for actions of type createFood, makes api call with the payload and dispatches new action of type, 'create food success'