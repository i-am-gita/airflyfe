import {Flight} from '../data/flight';
import {Userr} from '../data/userr';


export interface TicketDTO{
  flightId: number;
  userId: number;
  priceEconomics: number;
  priceBusiness: number;
}
