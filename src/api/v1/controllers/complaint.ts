import { Request, Response } from 'express';
import { getComplaints, getComplaintStats, saveNewComplaint } from '../services/complaint';

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
    const allComplaints = await getComplaints();
    return res.status(200).json({ success: true, message: 'Fetched complaints successfully!', data: allComplaints });
  } catch (e) {
    return res.status(400).json({ success: false, message: 'Failed retrieving admins' });
  }
};

export const getComplaintStatistics = async (req: Request, res: Response) => {
  try {
    const allComplaintStats = await getComplaintStats();
    return res.status(200).json({
      success: true,
      message: 'Fetched complaint statistics successfully!',
      data: {
        fares: allComplaintStats.fares,
        thefts: allComplaintStats.thefts,
        abuse: allComplaintStats.abuses,
        forgottenItems: allComplaintStats.forgottenItems,
      },
    });
  } catch (e) {
    return res.status(400).json({ success: false, message: 'Failed retrieving complaint stats' });
  }
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const getComplaint = async (req: Request, res: Response) => {};
