import { LoadingModule } from './../shared/components/loading/loading.module';
import { StarWarsCharacterCardModule } from './components/star-wars-character-card/star-wars-character-card.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeButtonsModule } from './components/home-buttons/home-buttons.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    StarWarsCharacterCardModule,
    LoadingModule,
    HomeButtonsModule
  ]
})
export class HomeModule { }
