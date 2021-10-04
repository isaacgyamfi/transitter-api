import { Router } from 'express';
import { addTaxi, assignDriverToTaxi, getAllTaxis, getTaxi } from '../controllers/taxi';

const taxiRouter = Router();

taxiRouter.post('/add', addTaxi);
taxiRouter.get('/', getAllTaxis);
taxiRouter.get('/:number', getTaxi);
taxiRouter.post('/assign-driver', assignDriverToTaxi);

export default taxiRouter;
