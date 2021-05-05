import {Airport} from './airport';

export interface Destination {
  destinationid: number;
  arrivalairport: string;
  departureairport: string;
  name: string;
  airport1: Airport;
  airport2: Airport;
}
