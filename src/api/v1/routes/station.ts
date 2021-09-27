import { Router } from 'express';
import { addStation, getAllStations } from '../controllers/station';

const stationRouter = Router();

stationRouter.post('/add', addStation);
stationRouter.get('/', getAllStations);
stationRouter.get('/:id');

export default stationRouter;
