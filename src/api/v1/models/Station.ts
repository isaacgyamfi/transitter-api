import { Model, Document, Schema, model } from 'mongoose';
import { IStation } from '../interfaces/place';

const stationSchema = new Schema<IStation>(
  {
    stationAdmin: {
      name: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: false,
      },
    },
    contact: { name: String, phone: String, email: String },
    address: { type: Schema.Types.ObjectId, required: true, ref: 'Place' },
    destinations: [
      {
        address: { type: Schema.Types.ObjectId, required: true, ref: 'Place' },
        fare: { type: Number, required: false },
      },
    ],
    taxis: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Taxi',
        required: true,
      },
    ],
  },
  { timestamps: true },
);

export const Station: Model<IStation> = model<IStation>('Station', stationSchema);
