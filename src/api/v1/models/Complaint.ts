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
    complaint: {
      complaintType: { type: String, required: true, enum: ['FARE', 'THEFT', 'ABUSE', 'FORGOTTEN ITEM'] },
      subject: String,
      description: String,
    },
    registrationNumber: { type: String, required: false },
    status: { type: String, required: false, default: 'NOT RESOLVED' },
  },
  { timestamps: true },
);

export const Complaint: Model<IComplaint> = model<IComplaint>('Complaint', complaintSchema);
