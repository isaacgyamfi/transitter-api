import { Router } from 'express';
import { addPlace, getAllPlaces, getPlace } from '../controllers/place';

const placeRouter = Router();

placeRouter.post('/add', addPlace);
placeRouter.get('/', getAllPlaces);
placeRouter.get('', getPlace);

export default placeRouter;
