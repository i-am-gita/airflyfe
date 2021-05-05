import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from '../shared/header/header.component';
import { LandingComponent } from './landing/landing.component';
import { FlightsComponent } from '../pages/flights/flights.component';
import { FlightListComponent } from '../pages/flights/flight-list/flight-list.component';
import { FlightItemComponent } from './flights/flight-item/flight-item.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    LandingComponent,
    FlightsComponent,
    FlightItemComponent,
    FlightListComponent,
  ],
  exports: [
    LandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
  ],
  providers: [ HttpClientModule ]
})
export class PagesModule { }
