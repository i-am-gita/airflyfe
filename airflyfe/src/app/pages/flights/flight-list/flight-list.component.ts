import {Component, Input, OnInit} from '@angular/core';
import {Flight} from '../../../core/data/flight';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  @Input('flightList') flightList: Flight[];

  constructor() { }

  ngOnInit(): void {
  }

}
