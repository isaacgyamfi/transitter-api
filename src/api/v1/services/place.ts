import { IPlace, IQueryPlace } from '../interfaces/place';
import { Place } from '../models/Place';
import QueryString from 'qs';
// import * as QueryString from 'query-string';

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
export const queryPlace = async (data: QueryString.ParsedQs): Promise<any> => {
  // console.log(data);
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return await Place.findOne({ name: data.name, vicinity: data.vicinity, region: data.region });
  } catch (error) {
    return false;
  }
};
