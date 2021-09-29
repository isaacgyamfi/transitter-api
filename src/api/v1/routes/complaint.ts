import { Router } from 'express';
import { createComplaint, getAllComplaints, getComplaint } from '../controllers/complaint';

const complaintRouter = Router();

complaintRouter.post('/add', createComplaint);
complaintRouter.get('/', getAllComplaints);
complaintRouter.get('/:id', getComplaint);

export default complaintRouter;
