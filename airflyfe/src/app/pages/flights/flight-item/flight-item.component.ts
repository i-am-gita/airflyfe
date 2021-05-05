import {Component, Input, OnInit} from '@angular/core';
import {Flight} from '../../../core/data/flight';

@Component({
  selector: 'app-flight-item',
  templateUrl: './flight-item.component.html',
  styleUrls: ['./flight-item.component.scss']
})
export class FlightItemComponent implements OnInit {

  @Input('flight') flight: Flight;

  constructor() { }

  ngOnInit(): void {
  }

  printType(type: number) {
    switch (type){
      case 1:
        return 'Jednokratni let';
      case 2:
        return 'Kružni let';
      case 3:
        return 'Svakodnevni let';
    }
  }

  getTicketPrice(flightid: number) {

  }
}
