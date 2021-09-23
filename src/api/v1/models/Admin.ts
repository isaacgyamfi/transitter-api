import { Model, Schema, model } from 'mongoose';
import { IAdmin } from '../interfaces/admin';

const adminSchema = new Schema<IAdmin>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: false },
  },
  { timestamps: true },
);

export const Admin: Model<IAdmin> = model<IAdmin>('Admin', adminSchema);
