import { Model, Document, Schema, model } from 'mongoose';
import { IStation } from '../interfaces/place';

const stationSchema = new Schema<IStation>(
  {
    stationId: { type: Schema.Types.ObjectId, required: true },
    contact: { name: String, phone: String, email: String },
    address: { type: Schema.Types.ObjectId, required: true, ref: 'Place' },
    destinations: [
      {
        address: { type: Schema.Types.ObjectId, required: true, ref: 'Place' },
        fare: { type: Number, required: false },
        stops: [
          {
            address: { type: Schema.Types.ObjectId, required: true, ref: 'Place' },
            fare: { type: Number, required: false },
          },
        ],
      },
    ],
  },
  { timestamps: true },
);

export const station: Model<IStation> = model<IStation>('Station', stationSchema);
