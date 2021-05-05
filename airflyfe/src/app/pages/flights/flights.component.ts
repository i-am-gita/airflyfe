import {Component, Input, OnInit} from '@angular/core';
import {Flight} from '../../core/data/flight';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {

  @Input('flights') flights: Flight[];

  constructor() { }

  ngOnInit(): void {
  }

}
