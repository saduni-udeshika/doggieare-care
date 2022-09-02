import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotnv from 'dotenv';
//import routers like this
//import { noteRouter } from './services/noteService.js';
const app = express();

app.use(cors());
app.use(express.json());


//app.use('/user', userRouter);
//app.use('/admin', adminRouter);

const initialize = async () => {
  try {
    dotnv.config();
    //await mongoose.connect(process.env.MONGO_CONNECT_URL);
    //await initAdmin();
  } catch (e) {
    console.log(e);
  }
};

const startServer = async () => {
  await initialize();
  app.listen(process.env.PORT || 8000);
  console.log('Server started');
};

startServer();