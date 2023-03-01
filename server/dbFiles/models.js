const mongoose = require('mongoose');

let runSchema = new mongoose.Schema({
  workoutDate: Date,
  durationMinutes: Number,
  distance: Number,
  elevationGained: Number,
  temperature: Number,
  indoor: Boolean, // was string 1 or 2
  activeEnergy: Number,
  heartRate: {
    minimum: Number,
    maximum: Number,
    average: Number
  },
  pace: {
    minimum: Number,
    maximum: Number,
    average: Number
  },
  workoutRoute: {
    fileReference: String,
  }
});

let Run = mongoose.model('runs', runSchema);

module.exports = Run;
