import { Router } from 'express';
import { addPlace, getAllPlaces } from '../controllers/place';

const placeRouter = Router();

placeRouter.post('/add', addPlace);
placeRouter.get('/', getAllPlaces);

export default placeRouter;
