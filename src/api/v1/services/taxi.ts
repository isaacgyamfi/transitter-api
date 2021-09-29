import QueryString from 'qs';
import { Taxi } from '../models/Taxi';
import { ITaxi } from '../interfaces/taxi';

export const checkTaxiExists = async (data: { vin: string; registrationNumber: string }): Promise<boolean> => {
  try {
    const taxiExists = await Taxi.findOne({ registrationNumber: data.registrationNumber });
    return taxiExists ? true : false;
  } catch (e) {
    return true;
  }
};

export const saveNewTaxi = async (data: ITaxi): Promise<any> => {
  try {
    return await Taxi.create(data);
  } catch (error) {
    return false;
  }
};

export const getTaxis = async (): Promise<any> => {
  try {
    return await Taxi.find();
  } catch (error) {
    return false;
  }
};
export const queryTaxi = async (data: QueryString.ParsedQs): Promise<any> => {
  // console.log(data);
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return await Taxi.findOne();
  } catch (error) {
    return false;
  }
};
