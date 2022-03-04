import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarWarsCharacterCardComponent } from './star-wars-character-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [StarWarsCharacterCardComponent],
  exports: [
    StarWarsCharacterCardComponent
  ]
})
export class StarWarsCharacterCardModule { }
