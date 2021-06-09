import { Component, OnInit } from '@angular/core';
import {FlightsService} from '../flights/flights.service';
import {Flight} from '../../core/data/flight';
import {FlightWithPrice} from '../../core/data/flightWithPrice';

@Component({
  selector: 'app-all-flights',
  templateUrl: './all-flights.component.html',
  styleUrls: ['./all-flights.component.css']
})
export class AllFlightsComponent implements OnInit {

  //flights: Flight[];
  flights: FlightWithPrice[];

  constructor(private flightService: FlightsService) { }

  ngOnInit(): void {
    this.flightService.getFlights().subscribe(data =>  this.flights = data);
  }

}
