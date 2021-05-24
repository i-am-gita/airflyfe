import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from '../shared/header/header.component';
import { LandingComponent } from './landing/landing.component';
import { FlightsComponent } from './flights/flights.component';
import { FlightListComponent } from './flights/flight-list/flight-list.component';
import { FlightItemComponent } from './flights/flight-item/flight-item.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { AllFlightsComponent } from './all-flights/all-flights.component';
import { TicketReservationComponent } from './tickets/ticket-reservation/ticket-reservation.component';
import { AirlineInfoComponent } from './airline-info/airline-info.component';
import { AirlineReviewsComponent } from './airline-info/airline-reviews/airline-reviews.component';
import { CommentboxComponent } from './airline-info/commentbox/commentbox.component';
import {CommentsComponent, DatacontainerDirective} from './airline-info/comments/comments.component';
import { ChildboxComponent } from './airline-info/childbox/childbox.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LandingComponent,
    FlightsComponent,
    FlightItemComponent,
    FlightListComponent,
    AddFlightComponent,
    AllFlightsComponent,
    TicketReservationComponent,
    AirlineInfoComponent,
    AirlineReviewsComponent,
    CommentboxComponent,
    CommentsComponent,
    ChildboxComponent,
    DatacontainerDirective,
  ],
  exports: [
    LandingComponent,
    HeaderComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
    ],
  providers: [ HttpClientModule ]
})
export class PagesModule { }
