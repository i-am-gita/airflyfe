import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FlightWithPrice} from '../../core/data/flightWithPrice';
import {environment} from '../../../environments/environment';
import {Airline} from '../../core/data/airline';
import {MonthlyAirlineRatings} from '../../core/data/MonthlyAirlineRatings';

@Injectable({ providedIn: 'root' })
export class AirlinesService {

  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {
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

  getPastMonthRatings(): Observable<MonthlyAirlineRatings> {
    const url = environment.serverUrl + 'api/airline/getBestRatedAirlines';
    return new Observable(((o: any) => {
      this.http.get(url, {headers: this.httpHeaders }).subscribe((airlines: MonthlyAirlineRatings) => {
        o.next(airlines);
        return o.complete();
      });
    }));
  }

}
