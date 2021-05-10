import { Component, OnInit } from '@angular/core';
import {FlightDTO} from '../../core/dto/flightDTO';
import {FlightsService} from '../flights/flights.service';
import {Flight} from '../../core/data/flight';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  flightInfo: FlightDTO = {
    arrivalAirport: '',
    departureAirport: '',
    returnDate: null,
    goingDate: null,
  };

  showFlights: boolean = false;

  flights: Flight[] = [];

  constructor(private flightsService: FlightsService) {
  }

  ngOnInit(): void {
    console.log(localStorage.getItem('currentUser'));
  }

  getFlights() {
    if(this.flightInfo.returnDate !== null){
     this.flightsService.getReturnFlights(this.flightInfo).subscribe(data => {
       this.flights = data;
     });
    } else {
      this.flightsService.getOneWayFlights(this.flightInfo).subscribe(data => {
        this.flights = data;
      });
    }

    this.showFlights = true;
    console.log(this.flights);
  }
}
