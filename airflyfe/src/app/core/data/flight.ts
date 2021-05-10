import {Airline} from './airline';
import {Destination} from './destination';
import {Plane} from './plane';
import {Ticket} from './ticket';

export interface Flight {
  flightid: number;
  availabletickets: number;
  takeoffdate: Date;
  typee: number;
  airline: Airline;
  destination: Destination;
  plane: Plane;
  ticket: Ticket;
}
