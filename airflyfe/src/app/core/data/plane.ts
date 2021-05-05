import {Airline} from './airline';
import {Photo} from './photo';

export interface Plane {
  planeid: number;
  description: string;
  name: string;
  airline: Airline;
  photos: Photo[];
}
