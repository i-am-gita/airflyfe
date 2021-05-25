import {Component, Input, OnInit} from '@angular/core';
import {Airline} from '../../core/data/airline';
import {Review} from '../../core/data/review';
import {AirlineService} from './airline.service';
import {ReviewDTO} from '../../core/dto/reviewDTO';
import {RatingsDTO} from '../../core/dto/ratingsDTO';

@Component({
  selector: 'app-airline-info',
  templateUrl: './airline-info.component.html',
  styleUrls: ['./airline-info.component.css']
})
export class AirlineInfoComponent implements OnInit {

  @Input('airline') airline: Airline;
  @Input('averageRating') avgRating: number;
  comments: string;
  count: number;
  currentRate: number = 0;
  ratingDto: RatingsDTO = {
    airlineId: null,
    rating: null,
    userId: null,
  };


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

    this.airlineService.getAverageRatingForAirline(this.airline.airlineid).subscribe(data => {
      console.log(data);
      this.currentRate = data;
      this.airline.averageRating = data;
    });
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


  postAndApplyNewRating() {
    this.ratingDto.rating = this.currentRate;
    this.ratingDto.airlineId = this.airline.airlineid;
    this.ratingDto.userId = JSON.parse(localStorage.getItem('currentUser')).id;

    console.log(this.ratingDto);
    this.airlineService.rateAirline(this.ratingDto).subscribe(data => {
      console.log(data);
      this.airline.averageRating = data;
    })
  }
}
