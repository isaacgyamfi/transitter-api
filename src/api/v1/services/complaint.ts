import QueryString from 'qs';
import { IComplaint } from '../interfaces/complaint';
import { Complaint } from '../models/Complaint';

export const saveNewComplaint = async (data: IComplaint): Promise<any> => {
  try {
    return await Complaint.create(data);
  } catch (error) {
    return false;
  }
};

export const getComplaints = async (): Promise<any> => {
  try {
    return await Complaint.find();
  } catch (error) {
    return false;
  }
};

export const getComplaintStats = async (): Promise<boolean | any> => {
  try {
    const fares = await Complaint.find({ 'complaint.complaintType': 'FARE' }).countDocuments();
    const thefts = await Complaint.find({ 'complaint.complaintType': 'THEFT' }).countDocuments();
    const abuses = await Complaint.findOne({ 'complaint.complaintType': 'ABUSE' }).countDocuments();
    const forgottenItems = await Complaint.findOne({ 'complaint.complaintType': 'FORGOTTEN ITEM' }).countDocuments();

    return { fares, thefts, abuses, forgottenItems };
  } catch (e) {
    return false;
  }
};

export const queryPlace = async (data: QueryString.ParsedQs): Promise<any> => {
  // console.log(data);
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // return await Place.findOne({ name: data.name, vicinity: data.vicinity, region: data.region });
  } catch (error) {
    return false;
  }
};
