import {Component, Input, OnInit} from '@angular/core';
import {Flight} from '../../core/data/flight';
import {Router} from '@angular/router';
import {TicketService} from '../tickets/ticket.service';
import {AlertService} from '../../shared/alert/alert.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {

  @Input('flights') flights: Flight[];

  constructor(private router: Router, private ticketService:TicketService,
              private alertService: AlertService) { }

  ngOnInit(): void {
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


  ticketReservation(flight: Flight) {
    if(flight.availabletickets < 1) {
      this.alertService.error('There are no seats left on this flight!')
    }
    else {
      this.ticketService.selectedFlight = flight;
      this.router.navigate(['/ticket']);
    }
  }

  airlineClicked() {

  }
}
