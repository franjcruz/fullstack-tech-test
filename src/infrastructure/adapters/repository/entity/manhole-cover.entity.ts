import { Document } from 'mongoose';

export interface ManHoleCoverEntity extends Document {
  guid: string;
  size: string;
  material: string;
  decoration: boolean;
  radio: number;
}
