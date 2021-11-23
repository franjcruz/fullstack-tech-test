import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('manhole_cover')
export class ManholeCoverEntity {
  @PrimaryColumn()
  guid: string;

  @Column()
  size: string;

  @Column()
  material: string;

  @Column()
  decoration: boolean;

  @Column()
  radio: number;
}
