import { Router } from 'express';
import { getAllStatistics } from '../controllers/stats';
import { getComplaintStatistics } from '../controllers/complaint';

const statsRouter = Router();

statsRouter.get('/', getAllStatistics);
statsRouter.get('/complaints', getComplaintStatistics);

export default statsRouter;
