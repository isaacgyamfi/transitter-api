import { Router } from 'express';
import { addTaxi, getAllTaxis } from '../controllers/taxi';

const taxiRouter = Router();

taxiRouter.post('/add', addTaxi);
taxiRouter.get('/', getAllTaxis);
taxiRouter.get('/:id');

export default taxiRouter;
