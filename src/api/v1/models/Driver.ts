import { Model, Schema, model } from 'mongoose';
import { IDriver } from '../interfaces/taxi';

const driverSchema = new Schema<IDriver>(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: false },
    taxiLocal: { type: Schema.Types.ObjectId, ref: 'Station', required: false },
    taxi: { type: Schema.Types.ObjectId, ref: 'Taxi', required: false },
  },
  { timestamps: true },
);

export const Driver: Model<IDriver> = model<IDriver>('Driver', driverSchema);
