const mongoose = require('mongoose');

const RideSchema = new mongoose.Schema({
  start: String,
  destination: String,
  userId: String,
  riders: [String],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Ride', RideSchema);
