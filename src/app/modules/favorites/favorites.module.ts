import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritedPagesComponent } from './pages/favorited-pages/favorited-pages.component';


@NgModule({
  declarations: [
    FavoritedPagesComponent
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule
  ]
})
export class FavoritesModule { }
