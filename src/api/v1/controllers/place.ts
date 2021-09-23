import { Request, Response } from 'express';
import { getPlaces, saveNewPlace } from '../services/place';

export const addPlace = async (req: Request, res: Response) => {
  try {
    const addedPlace = await saveNewPlace(req.body);
    return res.status(201).json({ success: true, message: 'Station added successfully!', data: addedPlace });
  } catch (err) {
    return res.status(400).json({ success: false, message: 'Failed adding new place' });
  }
};

export const getAllPlaces = async (req: Request, res: Response) => {
  try {
    const allPlaces = getPlaces();
    return res.status(200).json({ success: true, message: 'Fetched places successfully!', data: allPlaces });
  } catch (e) {
    return res.status(400).json({ success: false, message: 'Failed retrieving places' });
  }
};
