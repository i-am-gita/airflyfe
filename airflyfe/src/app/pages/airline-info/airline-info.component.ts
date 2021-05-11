import {Component, Input, OnInit} from '@angular/core';
import {Airline} from '../../core/data/airline';

@Component({
  selector: 'app-airline-info',
  templateUrl: './airline-info.component.html',
  styleUrls: ['./airline-info.component.css']
})
export class AirlineInfoComponent implements OnInit {

  @Input('airline') airline: Airline;

  constructor() { }

  ngOnInit(): void {
  }

}
