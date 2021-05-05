import {Review} from './review';

export interface Airline {
  airlineid: number;
  description: string;
  luggageinfo: string;
  name: string;
  reviews: Review[];
}
