import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import { Injectable } from '@angular/core';
import {FlightDTO} from '../../core/dto/flightDTO';
import {Flight} from '../../core/data/flight';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Ticket} from '../../core/data/ticket';
import {tick} from '@angular/core/testing';
import {NewFlightDTO} from '../../core/dto/newFlightDTO';
import {Airline} from '../../core/data/airline';
import {Review} from '../../core/data/review';
import {ReviewDTO} from '../../core/dto/reviewDTO';
import {RatingsDTO} from '../../core/dto/ratingsDTO';

@Injectable({ providedIn: 'root' })
export class AirlineService {

  airline: Airline;

  review: Review;

  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {
  }



  getReturnFlights(data: FlightDTO): Observable<Flight[]> {
    const url = environment.serverUrl + 'api/flight/getFlightsForGoingAndReturningDate';
    return new Observable(((o: any) => {
      this.http.post(url, data, {headers: this.httpHeaders }).subscribe((flights: Flight[]) => {
        o.next(flights);
        return o.complete();
      });
    }));
  }

  getTicket(flightID: number): Observable<Ticket> {
    const url = environment.serverUrl + 'api/flight/getTicketInfo/' + flightID;
    return new Observable(((o: any) => {
      this.http.get(url, {headers: this.httpHeaders }).subscribe((ticket: Ticket) => {
        o.next(ticket);
        return o.complete();
      });
    }));
  }

  getReviewsForAirlineId(id: number): Observable<Review[]> {
    const url = environment.serverUrl + 'api/review/getAirlineReviews/' + id;
    return new Observable(((o: any) => {
      this.http.get(url, {headers: this.httpHeaders }).subscribe((reviews: Review[]) => {
        o.next(reviews);
        return o.complete();
      });
    }));
  }

  createReview(data: ReviewDTO): Observable<ReviewDTO> {
    const url = environment.serverUrl + 'api/review/create';
    return new Observable(((o: any) => {
      this.http.post(url, data, { headers: this.httpHeaders }).subscribe((review: Review) => {
        o.next(review);
        return o.complete();
      });
    }));
  }

  getAverageRatingForAirline(airlineId: number): Observable<number> {
    const url = environment.serverUrl + 'api/airline/getRating/' + airlineId;
    return new Observable(((o: any) => {
      this.http.get(url, {headers: this.httpHeaders }).subscribe((rating: number) => {
        o.next(rating);
        return o.complete();
      });
    }));
  }

  rateAirline(ratingDto: RatingsDTO): Observable<number> {
    const url = environment.serverUrl + 'api/rating/create';
    return new Observable(((o: any) => {
      this.http.post(url, ratingDto, { headers: this.httpHeaders }).subscribe((rating: number) => {
        o.next(rating);
        return o.complete();
      });
    }));
  }

}
