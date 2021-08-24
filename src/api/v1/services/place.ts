import { IPlace } from '../interfaces/place';
import { Place } from '../models/Station';

export const saveNewPlace = async (data: IPlace): Promise<any> => {
  try {
    return await Place.create(data);
  } catch (error) {
    return false;
  }
};

export const getPlaces = async (): Promise<any> => {
  try {
    return await Place.find();
  } catch (error) {
    return false;
  }
};
