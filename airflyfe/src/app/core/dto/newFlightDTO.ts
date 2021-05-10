import {Airline} from '../data/airline';

export interface NewFlightDTO{
  departureAirportName:string;
  arrivalAirportName:string;
  departureCity:string;
  arrivalCity:string
  flightType: number;
  takeOffDate: Date;
  ticketNumber: number;
  priceEconomics: number;
  priceFirstClass: number;
  selectedAirline: number;
}
