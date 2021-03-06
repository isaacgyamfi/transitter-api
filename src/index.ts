import express, { Express } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';
import cors from 'cors';
import placeRouter from './api/v1/routes/place';
import mongoose, { Mongoose } from 'mongoose';
import stationRouter from './api/v1/routes/station';
import adminRouter from './api/v1/routes/admin';
import taxiRouter from './api/v1/routes/taxi';
import driverRouter from './api/v1/routes/driver';
import complaintRouter from './api/v1/routes/complaint';
import statsRouter from './api/v1/routes/stats';

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

const app: Express = express();
app.use(cors());

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/places', placeRouter);
app.use('/stations', stationRouter);
app.use('/taxis', taxiRouter);
app.use('/admins', adminRouter);
app.use('/drivers', driverRouter);
app.use('/complaints', complaintRouter);
app.use('/stats', statsRouter);

mongoose
  .connect(`${MONGO_URI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res: Mongoose) => {
    console.log('Database connected!');
    app.listen(PORT, async () => {
      console.log(`Server running on ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
