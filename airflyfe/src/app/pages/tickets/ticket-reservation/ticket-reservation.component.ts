import { Component, OnInit } from '@angular/core';
import {TicketService} from '../ticket.service';
import {Ticket} from '../../../core/data/ticket';
import {Flight} from '../../../core/data/flight';
import {Userr} from '../../../core/data/userr';
import {TicketDTO} from '../../../core/dto/ticketDTO';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ticket-reservation',
  templateUrl: './ticket-reservation.component.html',
  styleUrls: ['./ticket-reservation.component.css']
})
export class TicketReservationComponent implements OnInit {

  ticket: Ticket = {
    flight: null,
    priceeconomics: 15000,
    pricebusiness: 22000,
    user: null,
    ticketid: -1,
  };


  ticketWithDiscount: Ticket = {
    flight: null,
    user: null,
    ticketid: -1,
    pricebusiness: -1,
    priceeconomics: -1,
  };

  flight: Flight = {
    ticket: null,
    flightid: -1,
    availabletickets: -1,
    destination: null,
    takeoffdate: new Date(),
    airline: null,
    plane: null,
    typee: -1,
  };

  user: Userr = new Userr();

  discount: string = 'No';

  ticketDTO: TicketDTO = {
    priceEconomics: -1,
    priceBusiness: -1,
    userId: -1,
    flightId: -1
  };

  constructor(private ticketService: TicketService, private router: Router) { }

  ngOnInit(): void {
    this.flight = this.ticketService.selectedFlight;
    console.log(this.flight);
    this.ticketService.getTicketForFlight(this.flight).subscribe(data => {
      this.ticket = data;
      console.log(this.ticket);
    })
    this.getDiscount();
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
      this.user.userid = JSON.parse(localStorage.getItem('currentUser')).id;
      console.log('got Here' + localStorage.getItem('currentUser'));
      this.ticketService.checkDiscount(this.user.userid).subscribe(data => {
        if(data) {
          this.discount = 'Yes';
          this.ticketWithDiscount.pricebusiness = this.ticket.pricebusiness - (this.ticket.pricebusiness * 5/100);
          this.ticketWithDiscount.priceeconomics = this.ticket.priceeconomics - (this.ticket.priceeconomics * 5/100);
          this.ticketWithDiscount.user = this.ticket.user;
        }
      });
  }

  ticketReservation(flight: Flight) {
    if(flight.availabletickets > 0) {
        this.ticketDTO.flightId = flight.flightid;
        this.ticketDTO.userId = this.user.userid;

        if(this.discount === 'Yes') {
          this.ticketDTO.priceBusiness = this.ticketWithDiscount.pricebusiness;
          this.ticketDTO.priceEconomics = this.ticketWithDiscount.priceeconomics;
        } else {
          this.ticketDTO.priceBusiness = this.ticket.pricebusiness;
          this.ticketDTO.priceEconomics = this.ticket.priceeconomics;
        }
        this.ticketService.bookFlightTicket(this.ticketDTO).subscribe(data => {
          console.log(data);
          this.router.navigate(['/']);
        });
    }
  }
}
