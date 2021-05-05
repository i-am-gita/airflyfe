import {Passenger} from './passenger';

export interface Ticket {

  ticketid: number;
  pricebusiness: number;
  priceeconomics: number;
  passenger: Passenger;
}
