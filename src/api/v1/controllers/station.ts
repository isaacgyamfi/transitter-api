import { Request, Response } from 'express';
import { getStations, saveNewStation } from '../services/station';

export const addStation = async (req: Request, res: Response) => {
  try {
    const addedStation = await saveNewStation(req.body);
    return res.status(201).json({ success: true, message: 'Station added successfully!', data: addedStation });
  } catch (err) {
    return res.status(400).json({ success: false, message: 'Failed adding new station' });
  }
};

export const getAllStations = async (req: Request, res: Response) => {
  try {
    const allStations = getStations();
    return res.status(200).json({ success: true, message: 'Fetched station successfully!', data: allStations });
  } catch (e) {
    return res.status(400).json({ success: false, message: 'Failed retrieving station' });
  }
};
