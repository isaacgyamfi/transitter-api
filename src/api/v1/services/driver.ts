import QueryString from 'qs';
import { Driver } from '../models/Driver';
import { IDriver } from '../interfaces/taxi';

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
    return await Driver.create(data);
  } catch (error) {
    return false;
  }
};

export const getDrivers = async (): Promise<any> => {
  try {
    return await Driver.find();
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
