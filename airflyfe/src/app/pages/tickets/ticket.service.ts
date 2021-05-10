import {Injectable} from '@angular/core';
import {Flight} from '../../core/data/flight';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Ticket} from '../../core/data/ticket';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class TicketService {

  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {
  }

  selectedFlight: Flight;


  getTicketForFlight(flight: Flight): Observable<Ticket>{
    const url = environment.serverUrl + 'api/ticket/getTicketForFlight';
    return new Observable(((o: any) => {
      this.http.post(url, flight, {headers: this.httpHeaders }).subscribe((ticket: Ticket) => {
        o.next(ticket);
        return o.complete();
      });
    }));
  }


  checkDiscount(userId: number){
    const url = environment.serverUrl + 'api/ticket/checkDiscount/' + userId;
    return new Observable(((o: any) => {
      this.http.get(url, {headers: this.httpHeaders }).subscribe((discount: string) => {
        o.next(discount);
        return o.complete();
      });
    }));
  }
}
