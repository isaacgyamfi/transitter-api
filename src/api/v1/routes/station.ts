import { Router } from 'express';
import { addStation, getAllStations } from '../controllers/station';

const stationRouter = Router();

stationRouter.post('/add', addStation);
stationRouter.get('/stations', getAllStations);
stationRouter.get('/station:id');

export default stationRouter;
