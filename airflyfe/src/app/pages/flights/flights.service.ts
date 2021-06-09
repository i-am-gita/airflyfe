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
import {Photo} from '../../core/data/photo';
import {FlightWithPrice} from '../../core/data/flightWithPrice';

@Injectable({ providedIn: 'root' })
export class FlightsService {

  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {
  }

  addNewFlight(data: NewFlightDTO): Observable<Flight> {
    const url = environment.serverUrl + 'api/flight/add';
    return new Observable(((o: any) => {
      this.http.post(url, data,{headers: this.httpHeaders }).subscribe((flight: Flight) => {
        o.next(flight);
        return o.complete();
      });
    }));
  }

  getOneWayFlights(data: FlightDTO): Observable<Flight[]> {
    const url = environment.serverUrl + 'api/flight/getFlightsForGoingDate';
    return new Observable(((o: any) => {
      console.log(data);
      this.http.post(url, data,{headers: this.httpHeaders }).subscribe((flights: Flight[]) => {
        o.next(flights);
        return o.complete();
      });
    }));
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

  // getFlights(): Observable<Flight[]> {
  //   const url = environment.serverUrl + 'api/flight/getAllFlights';
  //   return new Observable(((o: any) => {
  //     this.http.get(url, {headers: this.httpHeaders }).subscribe((flights: Flight[]) => {
  //       o.next(flights);
  //       return o.complete();
  //     });
  //   }));
  // }

  getFlights(): Observable<FlightWithPrice[]> {
    const url = environment.serverUrl + 'api/flight/getSortedFlights';
    return new Observable(((o: any) => {
      this.http.get(url, {headers: this.httpHeaders }).subscribe((flights: FlightWithPrice[]) => {
        o.next(flights);
        return o.complete();
      });
    }));
  }

  getAllAirlines(): Observable<Airline[]> {
    const url = environment.serverUrl + 'api/airline/getAll';
    return new Observable(((o: any) => {
      this.http.get(url, {headers: this.httpHeaders }).subscribe((airlines: Airline[]) => {
        o.next(airlines);
        return o.complete();
      });
    }));
  }

  getPhotosForPlaneId(id: number): Observable<Photo[]> {
    const url = environment.serverUrl + 'api/photos/getPhotosForPlane/' + id;
    return new Observable(((o: any) => {
      this.http.get(url, {headers: this.httpHeaders }).subscribe((photo: Photo[]) => {
        o.next(photo);
        return o.complete();
      });
    }));
  }
}
