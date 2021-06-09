import {Component, Input, OnInit} from '@angular/core';
import {Flight} from '../../../core/data/flight';
import {ActivatedRoute, Router} from '@angular/router';
import {TicketService} from '../../tickets/ticket.service';
import {AlertService} from '../../../shared/alert/alert.service';
import {Airline} from '../../../core/data/airline';
import {AirlineService} from '../../airline-info/airline.service';
import {FlightsService} from '../flights.service';
import {Photo} from '../../../core/data/photo';

@Component({
  selector: 'app-flight-item',
  templateUrl: './flight-item.component.html',
  styleUrls: ['./flight-item.component.scss']
})
export class FlightItemComponent implements OnInit {

  @Input('flight') flight: Flight;
  showAirline: boolean = false;
  photos: Photo[] = [];

  currentPhoto: Photo = {
    url:'',
    description: '',
    photoid: 0,
  }

  constructor(private router: Router, private ticketService:TicketService,
              private alertService: AlertService, private airlineService: AirlineService,
              private flightService: FlightsService) { }

  ngOnInit(): void {
    this.flightService.getPhotosForPlaneId(this.flight.plane.planeid).subscribe(data => {
        this.photos = data;
        this.currentPhoto = this.photos.pop();
        console.log(data);
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


  ticketReservation(flight: Flight) {
    if(flight.availabletickets < 1) {
      this.alertService.error('There are no seats left on this flight!')
    }
    else {
      this.ticketService.selectedFlight = flight;
      this.router.navigate(['/ticket']);
    }
  }

  toAirlinePage(airline: Airline) {
    this.airlineService.airline = airline;
    this.showAirline = this.showAirline !== true;
  }

  changeImage() {
    let temp = this.currentPhoto;
    this.currentPhoto = this.photos.pop();
    this.photos.unshift(temp);
  }
}
