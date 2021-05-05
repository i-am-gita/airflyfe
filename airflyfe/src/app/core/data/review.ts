import {Airline} from './airline';
import {Passenger} from './passenger';

export interface Review {
  reviewid: string;
  description: string;
  grade: number;
  airline: Airline;
  passenger: Passenger;
}
