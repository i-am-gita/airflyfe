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

@Injectable({ providedIn: 'root' })
export class AirlineService {

  airline: Airline;

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

}
