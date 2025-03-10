import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { FavoritesComponent } from './favorites.component';

const routes: Routes = [
  { path: '', component: FavoritesComponent }
];

@NgModule({
  declarations: [FavoritesComponent],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule.forChild(routes)
  ]
})
export class FavoritesModule { }