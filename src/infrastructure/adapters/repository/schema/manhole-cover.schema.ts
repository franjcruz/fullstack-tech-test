import { EntitySchema } from 'typeorm';

import { ManholeCoverEntity } from '../entity/manhole-cover.entity';

const ManholeCoverSchema = new EntitySchema<ManholeCoverEntity>({
  name: 'ManholeCoverEntity',
  target: ManholeCoverEntity,
  columns: {
    guid: {
      type: String,
      primary: true,
    },
    material: {
      type: String,
    },
    size: {
      type: String,
    },
    radio: {
      type: Number,
    },
    decoration: {
      type: Boolean,
      default: true,
    },
  },
});

export default ManholeCoverSchema;
