import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { HeroesListComponent } from './components/list/list.component';



@NgModule({
  declarations: [
    HeroComponent,
    HeroesListComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    HeroesListComponent,
    HeroComponent
  ]
})
export class HeroesModule { }
