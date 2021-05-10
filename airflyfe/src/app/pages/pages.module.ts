import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from '../shared/header/header.component';
import { LandingComponent } from './landing/landing.component';
import { FlightsComponent } from './flights/flights.component';
import { FlightListComponent } from './flights/flight-list/flight-list.component';
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
    LandingComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
  ],
  providers: [ HttpClientModule ]
})
export class PagesModule { }
