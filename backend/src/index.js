const express = require("express");
const cors = require("cors");
const  mongoose = require('mongoose');
require("dotenv").config();
const medicineRouter = require('./routes/medicineRoute.js');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/medicine', medicineRouter)

const initialize = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECT_URL);
    console.log("Mongodb connection success!");
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