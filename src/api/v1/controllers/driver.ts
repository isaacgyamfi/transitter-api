import { Request, Response } from 'express';
import { checkDriverExists, getDrivers, saveNewDriver } from '../services/driver';

export const addDriver = async (req: Request, res: Response) => {
  const { phone } = req.body;
  try {
    const userExists = await checkDriverExists(phone);
    if (!userExists) {
      const addedDriver = await saveNewDriver(req.body);
      return res.status(201).json({ success: true, message: 'Driver added successfully!', data: addedDriver });
    }
    return res.status(400).json({ success: false, message: 'Failed adding new driver. Driver already exists' });
  } catch (err) {
    return res.status(400).json({ success: false, message: 'Failed adding new driver' });
  }
};

export const getAllDrivers = async (req: Request, res: Response) => {
  try {
    const allDrivers = await getDrivers();
    return res.status(200).json({ success: true, message: 'Fetched drivers successfully!', data: allDrivers });
  } catch (e) {
    return res.status(400).json({ success: false, message: 'Failed retrieving driver' });
  }
};
