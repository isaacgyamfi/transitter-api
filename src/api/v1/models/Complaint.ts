import { Model, Schema, model } from 'mongoose';
import { IComplaint } from '../interfaces/complaint';

const complaintSchema = new Schema<IComplaint>(
  {
    user: {
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
    complaint: { type: String, subject: String, description: String },
  },
  { timestamps: true },
);

export const Complaint: Model<IComplaint> = model<IComplaint>('Complain', complaintSchema);
