import { Request, Response } from 'express';
import { authenticatePublisher, getAdmins, saveNewAdmin } from '../services/admin';

export const createAdmin = async (req: Request, res: Response) => {
  try {
    const addedAdmin = await saveNewAdmin(req.body);
    return res.status(201).json({ success: true, message: 'Admin created successfully!', data: addedAdmin });
  } catch (err) {
    return res.status(400).json({ success: false, message: 'Failed creating new admin' });
  }
};

export const getAllAdmins = async (req: Request, res: Response) => {
  try {
    const allPlaces = getAdmins();
    return res.status(200).json({ success: true, message: 'Fetched admins successfully!', data: allPlaces });
  } catch (e) {
    return res.status(400).json({ success: false, message: 'Failed retrieving admins' });
  }
};

export const loginAdmin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const authState = await authenticatePublisher({ email, password });
  return authState == false
    ? res.status(404).json({ success: false, message: 'Invalid credentials' })
    : res.status(200).json({ success: true, message: 'User authenticated successfully', data: authState });
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const getAdmin = async (req: Request, res: Response) => {};
