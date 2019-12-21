import {Pet} from './pet';

export class User {
  id: number;
  label: string;
  email: string;
  password: string;
  pets: Pet[];
  level: number;
}
