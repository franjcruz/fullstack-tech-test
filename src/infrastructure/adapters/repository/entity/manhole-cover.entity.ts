import { Document } from 'mongoose';

export interface ManHoleCoverEntity extends Document {
  readonly guid: string;
  readonly size: string;
  readonly material: string;
  readonly decoration: boolean;
  readonly radio: number;
}
