import { Request, Response } from 'express';
import { getStations, saveNewStation } from '../services/station';

export const addStation = async (req: Request, res: Response) => {
  try {
    const addedStation = await saveNewStation(req.body);
    if (addedStation) {
      return res.status(201).json({ success: true, message: 'Station added successfully!', data: addedStation });
    }
    return res.status(400).json({ success: false, message: 'Failed creating new station.' });
  } catch (err) {
    return res.status(400).json({ success: false, message: 'Failed adding new station' });
  }
};

export const getAllStations = async (req: Request, res: Response) => {
  try {
    const allStations = await getStations();
    return res.status(200).json({ success: true, message: 'Fetched stations successfully!', data: allStations });
  } catch (e) {
    return res.status(400).json({ success: false, message: 'Failed retrieving stations' });
  }
};
