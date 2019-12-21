import { Place } from './place';

export class Sector {
  id: number;
  label: string;
  imageUrl: string;
  places: Place[];
  createAt: Date;
  updatedAt: Date;
}
