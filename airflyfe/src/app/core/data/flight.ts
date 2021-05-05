import {Airline} from './airline';
import {Destination} from './destination';
import {Plane} from './plane';
import {Ticket} from './ticket';

export interface Flight {
  flightid: number;
  availabletickets: number;
  date: Date;
  type: number;
  airline: Airline;
  destination: Destination;
  plane: Plane;
  ticket: Ticket;
}
