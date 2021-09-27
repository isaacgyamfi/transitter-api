import { Request, Response } from 'express';
import { getPlaces, queryPlace, saveNewPlace } from '../services/place';
import { stringify } from 'query-string';

export const addPlace = async (req: Request, res: Response) => {
  try {
    const addedPlace = await saveNewPlace(req.body);
    return res.status(201).json({ success: true, message: 'Place added successfully!', data: addedPlace });
  } catch (err) {
    return res.status(400).json({ success: false, message: 'Failed adding new place' });
  }
};

export const getAllPlaces = async (req: Request, res: Response) => {
  try {
    const allPlaces = await getPlaces();
    console.log(allPlaces);
    return res.status(200).json({ success: true, message: 'Fetched places successfully!', data: allPlaces });
  } catch (e) {
    return res.status(400).json({ success: false, message: 'Failed retrieving places' });
  }
};
export const getPlace = async (req: Request, res: Response) => {
  try {
    const data = req.query;
    const allPlaces = await queryPlace(data);
    return res.status(200).json({ success: true, message: 'Fetched places successfully!', data: allPlaces });
  } catch (e) {
    return res.status(400).json({ success: false, message: 'Failed retrieving places' });
  }
};
