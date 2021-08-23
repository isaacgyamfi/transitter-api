import { Router } from 'express';
import { addPlace, getAllPlaces } from '../controllers/place';

const placeRouter = Router();

placeRouter.post('/create', addPlace);
placeRouter.get('/places', getAllPlaces);

export default placeRouter;
