import { Component, OnInit } from '@angular/core';
import {TicketService} from '../ticket.service';
import {Ticket} from '../../../core/data/ticket';
import {Flight} from '../../../core/data/flight';
import {Userr} from '../../../core/data/userr';

@Component({
  selector: 'app-ticket-reservation',
  templateUrl: './ticket-reservation.component.html',
  styleUrls: ['./ticket-reservation.component.css']
})
export class TicketReservationComponent implements OnInit {

  ticket: Ticket;
  flight: Flight;
  user: Userr;
  discount: string;

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.flight = this.ticketService.selectedFlight;
    this.ticketService.getTicketForFlight(this.ticketService.selectedFlight).subscribe(data => {
      this.ticket = data;
      console.log(this.ticket);
    })
  }

  printType(type: number) {
    switch (type){
      case 1:
        return 'Oneway';
      case 2:
        return 'Weekly';
      case 3:
        return 'Everyday';
    }
  }

  getDiscount() {
      this.user = JSON.parse(localStorage.getItem('currentUser'));
      this.ticketService.checkDiscount(this.user.userid).subscribe(data => {
        if(data) this.discount = 'YES';
        else this.discount = 'NO';
      });

      return this.discount;
  }
}
