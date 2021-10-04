import QueryString from 'qs';
import { Taxi } from '../models/Taxi';
import { ITaxi } from '../interfaces/taxi';
import { Station } from '../models/Station';
import { Place } from '../models/Place';
import { Driver } from '../models/Driver';

export const checkTaxiExists = async (data: string): Promise<boolean> => {
  try {
    const taxiExists = await Taxi.findOne({ registrationNumber: data });
    return taxiExists ? true : false;
  } catch (e) {
    return true;
  }
};

export const saveNewTaxi = async (data: ITaxi): Promise<any> => {
  try {
    const fetchedPlace = await Place.findOne({ name: data.station });
    const fetchedStation = await Station.findOne({ address: fetchedPlace?._id });
    return await Taxi.create({ ...data, station: fetchedStation?._id });
  } catch (error) {
    return false;
  }
};

export const assignDriver = async (data: { registrationNumber: string; driver: string }): Promise<any> => {
  console.log(data);
  try {
    return await Taxi.findOneAndUpdate({ registrationNumber: data.registrationNumber }, { driver: data.driver });
  } catch (error) {
    return false;
  }
};

export const getTaxis = async (): Promise<any> => {
  try {
    return await Taxi.find()
      .populate({ path: 'driver', model: 'Driver' })
      .populate({ path: 'station', model: 'Station', populate: { path: 'address' } });
  } catch (error) {
    return false;
  }
};

export const findTaxi = async (data: string): Promise<any> => {
  try {
    return await Taxi.findOne({ registrationNumber: data })
      .populate({ path: 'driver', model: 'Driver' })
      .populate({ path: 'station', model: 'Station', populate: { path: 'address' } });
  } catch (e) {
    return false;
  }
};
