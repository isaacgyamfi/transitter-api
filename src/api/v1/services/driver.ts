import QueryString from 'qs';
import { Driver } from '../models/Driver';
import { IDriver } from '../interfaces/taxi';
import { Taxi } from '../models/Taxi';
import taxi from '../routes/taxi';
import { Station } from '../models/Station';
import { Place } from '../models/Place';

export const checkDriverExists = async (data: string): Promise<boolean> => {
  try {
    const userExists = await Driver.findOne({ phone: data });
    return userExists ? true : false;
  } catch (e) {
    return true;
  }
};

export const saveNewDriver = async (data: IDriver): Promise<any> => {
  try {
    const fetchedPlace = await Place.findOne({ name: data.taxiLocal });
    const fetchedStation = await Station.findOne({ address: fetchedPlace?._id });
    const fetchedTaxi = await Taxi.findOne({ registrationNumber: data.taxi });
    if (fetchedTaxi?.driver) {
      return false;
    } else {
      const newDriver = await Driver.create({ ...data, taxi: fetchedTaxi?._id, taxiLocal: fetchedStation?._id });
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      fetchedTaxi.driver = newDriver._id;
      return newDriver;
    }
  } catch (error) {
    return false;
  }
};

export const getDrivers = async (): Promise<any> => {
  try {
    return await Driver.find().populate({ path: 'taxi taxiLocal', populate: { path: 'address' } });
  } catch (error) {
    return false;
  }
};
export const queryDriver = async (data: QueryString.ParsedQs): Promise<any> => {
  // console.log(data);
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return await Driver.findOne();
  } catch (error) {
    return false;
  }
};
