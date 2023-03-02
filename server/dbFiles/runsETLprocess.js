const fs = require ('fs');
const Run = require('./models').Run;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/rundb');

const copyFiles = (copyPath) => {
  fs.readFile(copyPath, (err, result) => {
    if (err) throw err;
    let runObj = JSON.parse(result);

    for (let key in runObj) {
      const dateNum = new Date(runObj[key].dateCreated)
      const duration = Math.round(Number.parseFloat(runObj[key].durationMinutes));
      if (runObj[key].HKElevationAscended !== undefined) {
        var elevation = parseInt(runObj[key].HKElevationAscended);
      } else {
        var elevation = 0;
      }
      if (runObj[key].HKWeatherTemperature !== undefined) {
        var temperature = Math.round(parseFloat(runObj[key].HKWeatherTemperature));
      } else {
        var temperature = 0;
      }
      const energy = runObj[key].HKQuantityTypeIdentifierActiveEnergyBurned.sum;

      if (runObj[key].HKQuantityTypeIdentifierHeartRate !== undefined) {
        const heartObj = runObj[key].HKQuantityTypeIdentifierHeartRate;
        var heart = {};
        heart.minimum = parseFloat(heartObj.minimum);
        heart.maximum = parseFloat(heartObj.maximum);
        heart.average = parseFloat(heartObj.average);
      } else {
        var heart = { minimum: 0, maximum: 0, average: 0};
      }
      
      const distanceObj = runObj[key].HKQuantityTypeIdentifierDistanceWalkingRunning;
      const distance = parseFloat(distanceObj.sum);

      const pace = {};
      if (runObj[key].HKQuantityTypeIdentifierRunningSpeed !== undefined) {
        var paceObj = runObj[key].HKQuantityTypeIdentifierRunningSpeed
        pace.minimum = parseFloat(paceObj.minimum);
        pace.maximum = parseFloat(paceObj.maximum);
        pace.average = parseFloat(paceObj.average);
      } else {
        const hours = duration / 60;
        let avgPace = distance / hours;
        pace.average = avgPace;
        pace.minimum = avgPace;
        pace.maximum = avgPace;
      }

      let runRoute = '';
      if (runObj[key].WorkoutRoute !== undefined) {
        var routeObj = runObj[key].WorkoutRoute;
        runRoute = routeObj.FileReference;
      } 

      let currentObj = {
        durationMinutes: duration,
        distance: distance,
        elevationGained: elevation,
        temperature: temperature,
        indoor: Boolean(parseInt(runObj[key].HKIndoorWorkout)),
        activeEnergy: Math.round(parseFloat(energy)),
        heartRate: heart,
        pace: pace,
        workoutRoute : {
          fileReference: runRoute
        }
      };
      currentObj.workoutDate = dateNum;

      Run.create(currentObj)
        .catch(err => console.log(err));
    }
    // console.log(array);
    // return;
  })
}

copyFiles('/Users/ctunakan/MVP/health-data/inside.json');
copyFiles('/Users/ctunakan/MVP/health-data/outside.json');
