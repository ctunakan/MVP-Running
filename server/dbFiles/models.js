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

let runDataSchema = new mongoose.Schema({
  avgDistance: Number, // minutes
  avgDuration: Number, // miles
  avgPace: Number, // mph
  monthAvg: String,
})

let Run = mongoose.model('runs', runSchema, 'runs');
let RunData = mongoose.model('runData', runDataSchema, 'runData');

module.exports.Run = Run;
module.exports.RunData = RunData
