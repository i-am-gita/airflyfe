import {Airline} from './airline';
import {Userr} from './userr';

export interface Review {
  reviewid: string;
  description: string;
  grade: number;
  airline: Airline;
  user: Userr;
}
