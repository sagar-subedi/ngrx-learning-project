import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, rootEffects } from './store';
import * as fromFood from './store/food';
import { ApiModule } from './api/api.module';
import { FoodService } from './food/food.service';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { FoodComponent } from './food/food.component';
import { FoodModule } from './food/food.module';

@NgModule({
  declarations: [
    AppComponent,
    FoodComponent,
    TestComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    /**
     * Prepares root reducer and inits the store
     */
    StoreModule.forRoot(reducers),
    // StoreModule.forRoot(
    //   {
    //     food: fromFood.reducer
    //   }
    // ),
    /**
     * Effects
     */
    EffectsModule.forRoot(rootEffects),
    ApiModule,
    CommonModule,

  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
