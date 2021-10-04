import { Station } from '../models/Station';
import { IStation } from '../interfaces/place';
import { Place } from '../models/Place';

export const saveNewStation = async (data: IStation): Promise<any> => {
  console.log(data);
  try {
    const place = await Place.findOne({ name: data.address });
    return await Station.create({ ...data, address: place?._id });
  } catch (error) {
    return false;
  }
};

export const getStations = async (): Promise<any> => {
  try {
    return await Station.find().populate('address');
  } catch (error) {
    return false;
  }
};

export const getStation = async (stationId: string): Promise<any> => {
  try {
    const station = await Station.findOne({ stationId });
    return station;
  } catch (error) {
    return false;
  }
};

export const removeStation = async (stationId: string): Promise<any> => {
  try {
    const station = await Station.findOneAndRemove({ stationId });
    return true;
  } catch (error) {
    return false;
  }
};
