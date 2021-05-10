import {Role} from './role';

export interface Userr {
  userid: number;
  username: string;
  password: string;
  email: string;
  name: string;
  roles: Role[];
  token?: string;
}
