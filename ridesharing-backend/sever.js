const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const Ride = require('./models/Ride');

app.post('/rides', async (req, res) => {
  const { start, destination, userId } = req.body;
  const ride = new Ride({ start, destination, userId });
  await ride.save();
  res.status(201).send(ride);
});

app.get('/rides', async (req, res) => {
  const rides = await Ride.find();
  res.send(rides);
});
