import { Model, Schema, model } from 'mongoose';
import { IDriver } from '../interfaces/taxi';

const driverSchema = new Schema<IDriver>(
  {
    driverId: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: false },
    taxiLocal: { type: Schema.Types.ObjectId, ref: 'Station', required: false },
  },
  { timestamps: true },
);

export const Taxi: Model<IDriver> = model<IDriver>('Driver', driverSchema);
