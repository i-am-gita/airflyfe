import {Userr} from './userr';
import {Flight} from './flight';


export interface Ticket {

  ticketid: number;
  pricebusiness: number;
  priceeconomics: number;
  user: Userr;
  flight: Flight;
}
