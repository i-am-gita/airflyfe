import {Component, Input, OnInit} from '@angular/core';
import {Airline} from '../../../core/data/airline';
import {Review} from '../../../core/data/review';

@Component({
  selector: 'app-airline-reviews',
  templateUrl: './airline-reviews.component.html',
  styleUrls: ['./airline-reviews.component.css']
})
export class AirlineReviewsComponent implements OnInit {

  @Input('airline') airline: Airline;

  reviews: Review[];

  constructor() { }

  ngOnInit(): void {
  }

}
