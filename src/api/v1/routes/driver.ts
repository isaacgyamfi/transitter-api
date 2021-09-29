import { Router } from 'express';
import { addDriver, getAllDrivers } from '../controllers/driver';

const driverRouter = Router();

driverRouter.post('/add', addDriver);
driverRouter.get('/', getAllDrivers);
driverRouter.get('/:id');

export default driverRouter;
