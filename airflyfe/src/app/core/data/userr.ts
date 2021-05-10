import {Role} from './role';
import {Ticket} from './ticket';

export interface Userr {
  userid: number;
  username: string;
  password: string;
  email: string;
  name: string;
  roles: Role[];
  token?: string;
}
