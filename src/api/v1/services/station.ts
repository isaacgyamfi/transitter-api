import { Station } from '../models/Station';
import { IStation } from '../interfaces/place';

export const saveNewStation = async (data: IStation): Promise<any> => {
  try {
    return await Station.create(data);
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
