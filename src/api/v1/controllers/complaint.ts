import { Request, Response } from 'express';
import { getComplaints, saveNewComplaint } from '../services/complaint';

export const createComplaint = async (req: Request, res: Response) => {
  try {
    const addedComplaint = await saveNewComplaint(req.body);
    return res.status(201).json({ success: true, message: 'Complaint submitted successfully!', data: addedComplaint });
  } catch (err) {
    return res.status(400).json({ success: false, message: "Failed submitting complaint'" });
  }
};

export const getAllComplaints = async (req: Request, res: Response) => {
  try {
    const allComplaints = getComplaints();
    return res.status(200).json({ success: true, message: 'Fetched complaints successfully!', data: allComplaints });
  } catch (e) {
    return res.status(400).json({ success: false, message: 'Failed retrieving admins' });
  }
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const getComplaint = async (req: Request, res: Response) => {};
