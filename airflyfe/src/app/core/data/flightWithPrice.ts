import {Airline} from './airline';
import {Destination} from './destination';
import {Plane} from './plane';

export interface FlightWithPrice {
  flightid: number;
  availabletickets: number;
  takeoffdate: Date;
  typee: number;
  airline: Airline;
  destination: Destination;
  plane: Plane;
  ticketPrice: number;
}
