import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeButtonsComponent } from './home-buttons.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeButtonsComponent],
  exports: [
    HomeButtonsComponent
  ]
})
export class HomeButtonsModule { }
