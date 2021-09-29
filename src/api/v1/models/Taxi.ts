import { Model, Schema, model } from 'mongoose';
import { ITaxi } from '../interfaces/taxi';

const taxiSchema = new Schema<ITaxi>(
  {
    registrationNumber: { type: String, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    vin: { type: String, required: false },
    owner: {
      name: { type: String, required: true },
      contact: { type: String, required: true },
      address: { type: String, required: false },
    },
    station: {
      type: Schema.Types.ObjectId,
      ref: 'Station',
      required: false,
    },
    driver: {
      type: Schema.Types.ObjectId,
      ref: 'Driver',
      required: false,
    },
    colorCode: {
      fender: {
        type: String,
        required: true,
      },
      doors: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true },
);

export const Taxi: Model<ITaxi> = model<ITaxi>('Taxi', taxiSchema);
