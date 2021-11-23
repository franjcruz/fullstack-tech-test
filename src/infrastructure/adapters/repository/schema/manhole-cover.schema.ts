import { Schema } from 'mongoose';

const ManholeCoverSchema = new Schema({
  guid: {
    type: String,
    required: true,
  },
  material: String,
  size: String,
  decoration: Boolean,
  ratio: Number,
});

export default ManholeCoverSchema;
