import { Request, Response } from 'express';
import { checkTaxiExists, getTaxis, saveNewTaxi } from '../services/taxi';

export const addTaxi = async (req: Request, res: Response) => {
  const { registrationNumber, vin } = req.body;
  const taxiData = { registrationNumber, vin };
  try {
    const taxiExists = await checkTaxiExists(taxiData);
    if (!taxiExists) {
      const addedTaxi = await saveNewTaxi(req.body);
      console.log(addedTaxi);
      return res.status(201).json({ success: true, message: 'Taxi added successfully!', data: addedTaxi });
    }
    return res.status(400).json({ success: false, message: 'Failed adding new taxi. Taxi already exists!' });
  } catch (err) {
    return res.status(400).json({ success: false, message: 'Failed adding new taxi' });
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
