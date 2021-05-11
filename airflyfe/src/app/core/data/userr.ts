import {Role} from './role';
import {Ticket} from './ticket';

export class Userr {
  userid: number;
  username: string;
  password: string;
  email: string;
  name: string;
  roles: Role[];
  token?: string;

  constructor() {
  }
}
