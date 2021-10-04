import { Driver } from '../models/Driver';
import { Station } from '../models/Station';
import { Place } from '../models/Place';
import { Taxi } from '../models/Taxi';
import { Complaint } from '../models/Complaint';

export const getStats = async (): Promise<boolean | any> => {
  try {
    const drivers = await Driver.countDocuments();
    const stations = await Station.countDocuments();
    const places = await Place.countDocuments();
    const taxis = await Taxi.countDocuments();
    const complaints = await Complaint.countDocuments();

    return { drivers, stations, places, taxis, complaints };
  } catch (e) {
    return false;
  }
};
