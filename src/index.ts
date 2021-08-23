import express, { Express } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';
// import cors from 'cors';
import placeRouter from './api/v1/routes/place';
import mongoose, { Mongoose } from 'mongoose';

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

const app: Express = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', placeRouter);

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
