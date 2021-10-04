import { Request, Response } from 'express';
import { assignDriver, checkTaxiExists, findTaxi, getTaxis, saveNewTaxi } from '../services/taxi';

export const addTaxi = async (req: Request, res: Response) => {
  const { registrationNumber } = req.body;
  try {
    const taxiExists = await checkTaxiExists(registrationNumber);
    console.log('1', taxiExists);
    if (!taxiExists) {
      const addedTaxi = await saveNewTaxi(req.body);
      console.log(req.body);
      console.log(addedTaxi);
      return res.status(201).json({ success: true, message: 'Taxi added successfully!', data: addedTaxi });
    }
    return res.status(400).json({ success: false, message: 'Failed adding new taxi. Taxi already exists!' });
  } catch (err) {
    return res.status(400).json({ success: false, message: 'Failed adding new taxi' });
  }
};

export const assignDriverToTaxi = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const updatedTaxi = await assignDriver(req.body);
    return res.status(200).json({ success: true, message: 'Updated taxis successfully!', data: updatedTaxi });
  } catch (e) {
    return res.status(400).json({ success: false, message: 'Failed assigning driver to taxi' });
  }
};

export const getAllTaxis = async (req: Request, res: Response) => {
  try {
    const allTaxis = await getTaxis();
    return res.status(200).json({ success: true, message: 'Fetched taxis successfully!', data: allTaxis });
  } catch (e) {
    return res.status(400).json({ success: false, message: 'Failed retrieving taxi' });
  }
};

export const getTaxi = async (req: Request, res: Response) => {
  const { number } = req.params;
  try {
    const taxi = await findTaxi(number);
    return res.status(200).json({ success: true, message: 'Fetched taxis successfully!', data: taxi });
  } catch (e) {
    return res.status(400).json({ success: false, message: 'Failed retrieving taxi' });
  }
};
