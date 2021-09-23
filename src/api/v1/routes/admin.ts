import { Router } from 'express';
import { createAdmin, getAdmin, getAllAdmins, loginAdmin } from '../controllers/admin';

const adminRouter = Router();

adminRouter.post('/signup', createAdmin);
adminRouter.post('/login', loginAdmin);
adminRouter.get('/', getAllAdmins);
adminRouter.get('/:id', getAdmin);

export default adminRouter;
