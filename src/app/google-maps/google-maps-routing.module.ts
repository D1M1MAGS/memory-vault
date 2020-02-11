import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GoogleMapsPage } from './google-maps.page';
import { Geolocation } from '@ionic-native/geolocation';

const routes: Routes = [
  {
    path: '',
    component: GoogleMapsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoogleMapsPageRoutingModule {}
