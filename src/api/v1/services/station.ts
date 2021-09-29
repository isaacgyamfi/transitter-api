import { Station } from '../models/Station';
import { IAdmin } from '../interfaces/admin';

export const saveNewStation = async (data: IAdmin): Promise<any> => {
  try {
    return await Station.create(data);
  } catch (error) {
    return false;
  }
};

export const getStations = async (): Promise<any> => {
  try {
    return await Station.find();
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
