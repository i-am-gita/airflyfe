import { Component, OnInit } from '@angular/core';
import {NewFlightDTO} from '../../core/dto/newFlightDTO';
import {FlightsService} from '../flights/flights.service';
import {Airline} from '../../core/data/airline';
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.scss']
})
export class AddFlightComponent implements OnInit {

  newFlight: NewFlightDTO = {
    flightType: 0,
    arrivalAirportName: '',
    arrivalCity: '',
    departureAirportName: '',
    departureCity: '',
    priceEconomics: 0,
    priceFirstClass: 0,
    takeOffDate: new Date(),
    ticketNumber: 0,
    selectedAirline: null,
  };

  airlines: Airline[];


  constructor(private flightService: FlightsService, private router: Router) { }

  ngOnInit(): void {
    this.flightService.getAllAirlines().subscribe(data => {
      this.airlines = data;
      console.log(this.airlines);
    });
  }

  addNewFlight() {
    console.log(this.newFlight);
    this.flightService.addNewFlight(this.newFlight).subscribe(data => {
      console.log(data);
    })

    this.router.navigate(['/']);
  }
}
