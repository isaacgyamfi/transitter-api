import { Model, Schema, model } from 'mongoose';
import { IPlace } from '../interfaces/place';

const placeScheme = new Schema<IPlace>(
  {
    placeId: { type: Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    types: [{ type: String, enum: ['bus stop', 'taxi station', 'bus station'] }],
    vicinity: { type: String, required: true },
    region: { type: String, required: true },
    photos: [{ type: String, required: false }],
    geometry: {
      location: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
      },
    },
  },
  { timestamps: true },
);

export const place: Model<IPlace> = model<IPlace>('Place', placeScheme);
