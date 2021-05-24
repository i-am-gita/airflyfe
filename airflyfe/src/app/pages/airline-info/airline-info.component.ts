import {Component, Input, OnInit} from '@angular/core';
import {Airline} from '../../core/data/airline';
import {Review} from '../../core/data/review';
import {AirlineService} from './airline.service';
import {ReviewDTO} from '../../core/dto/reviewDTO';

@Component({
  selector: 'app-airline-info',
  templateUrl: './airline-info.component.html',
  styleUrls: ['./airline-info.component.css']
})
export class AirlineInfoComponent implements OnInit {

  @Input('airline') airline: Airline;
  comments: string;
  count: number;

  showReviews: boolean;
  review: ReviewDTO = {
    airlineId: null,
    description: null,
    userId: null,
  };
  reviewDesc: string;

  reviews: Review[];

  constructor(private airlineService: AirlineService) { }

  ngOnInit(): void {
    this.showReviews = false;
    this.count = 0;

    this.airlineService.getReviewsForAirlineId(this.airline.airlineid).subscribe(data =>{
      console.log(data);
      this.reviews = data;
    })
  }

  toggleReviews() {
    this.showReviews = this.showReviews === false;
  }


  receiveComment($event) {
    this.comments = $event;
    this.count = this.comments.length;
    console.log(this.comments.length);
  }

  recieveCount($event) {
    this.comments = $event;
    this.count = this.comments.length;
  }


  postReview(reviewDesc: string) {
    this.review.description = reviewDesc;
    this.review.userId  = JSON.parse(localStorage.getItem('currentUser')).id;
    this.review.airlineId = this.airline.airlineid;
    console.log(this.review);
    this.airlineService.createReview(this.review).subscribe(data => {
      console.log(data);

    });
    location.reload();
  }
}
