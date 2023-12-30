import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodComponent } from './food/food.component';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'food'
  },
  {
    path: 'food', component: FoodComponent
  },
  {
    path: 'test', component: TestComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
