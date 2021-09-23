import { Model, Schema, model } from 'mongoose';
import { ITaxi } from '../interfaces/taxi';

const taxiSchema = new Schema<ITaxi>(
  {
    registrationNumber: { type: String, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    vin: { type: String, required: true },
    owner: {
      name: { type: String, required: true },
      contact: { type: String, required: true },
      address: { type: String, required: false },
    },
    // colorCode: {type: String, required: true, enum: []}
  },
  { timestamps: true },
);

export const Taxi: Model<ITaxi> = model<ITaxi>('Taxi', taxiSchema);
