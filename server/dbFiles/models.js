const mongoose = require('mongoose');


let insideSchema = mongoose.Schema({
  dateCreated: {type: String, required: [true, 'Please add date']},
  durationMinutes: {type: String, required: [true, 'Please add duration']},
  HKAverageMETs: {type: String, required: false},
  HKElevationAscended: {type: String, required: false},
  HKIndoorWorkout: {type:String, default: '1'},
  HKQuantityTypeIdentifierActiveEngeryBurned: {
    endDate: {type: String, required: false},
    startDate: {type: String, required: false},
    sum: {type: String, required: false},
    unit: {type: String, default: 'Cal', required: false}
  },
  HKQuantityTypeIdentifierBasalEngeryBurned: {
    endDate: {type: String, required: false},
    startDate: {type: String, required: false},
    sum: {type: String, required: false},
    unit: {type: String, default: 'Cal', required: false}
  },
  HKQuantityTypeIdentifierDistanceWalkingRunning: {
    endDate: {type: String, required: false},
    startDate: {type: String, required: false},
    sum: {type: String, required: [true, 'Please add distance ran']},
    unit: {type: String, default: 'mi'}
  },
  HKQuantityTypeIdentifierHeartRate: {
    endDate: {type: String, required: false},
    startDate: {type: String, required: false},
    average: {type: String, required: false},
    maximum: {type: String, required: false},
    minimum: {type: String, required: false},
    unit: {type: String, default: 'count/min', required: false},
  },
  HKQuantityTypeIdentifierRunningSpeed: {
    endDate: {type: String, required: false},
    startDate: {type: String, required: false},
    average: {type: String, required: [true, 'Please add average pace']},
    maximum: {type: String, required: false},
    minimum: {type: String, required: false},
    unit: {type: String, default: 'mi/hr'},
  },
  HKQuantityTypeIdentifierStepCount: {
    endDate: {type: String, required: false},
    startDate: {type: String, required: false},
    sum: {type: String, required: false},
    unit: {type: String, default: 'count', required: false}
  },
  HKWeatherTemperature: {type: String, required: false}
})

let outsideSchema = mongoose.Schema({
  dateCreated: {type: String, required: [true, 'Please add date']},
  durationMinutes: {type: String, required: [true, 'Please add duration']},
  HKAverageMETs: {type: String, required: false},
  HKElevationAscended: {type: String, required: false},
  HKIndoorWorkout: {type:String, default: '1'},
  HKQuantityTypeIdentifierActiveEngeryBurned: {
    endDate: {type: String, required: false},
    startDate: {type: String, required: false},
    sum: {type: String, required: false},
    unit: {type: String, default: 'Cal', required: false}
  },
  HKQuantityTypeIdentifierBasalEngeryBurned: {
    endDate: {type: String, required: false},
    startDate: {type: String, required: false},
    sum: {type: String, required: false},
    unit: {type: String, default: 'Cal', required: false}
  },
  HKQuantityTypeIdentifierDistanceWalkingRunning: {
    endDate: {type: String, required: false},
    startDate: {type: String, required: false},
    sum: {type: String, required: [true, 'Please add distance ran']},
    unit: {type: String, default: 'mi'}
  },
  HKQuantityTypeIdentifierHeartRate: {
    endDate: {type: String, required: false},
    startDate: {type: String, required: false},
    average: {type: String, required: false},
    maximum: {type: String, required: false},
    minimum: {type: String, required: false},
    unit: {type: String, default: 'count/min', required: false},
  },
  HKQuantityTypeIdentifierRunningSpeed: {
    endDate: {type: String, required: false},
    startDate: {type: String, required: false},
    average: {type: String, required: [true, 'Please add average pace']},
    maximum: {type: String, required: false},
    minimum: {type: String, required: false},
    unit: {type: String, default: 'mi/hr'},
  },
  HKQuantityTypeIdentifierStepCount: {
    endDate: {type: String, required: false},
    startDate: {type: String, required: false},
    sum: {type: String, required: false},
    unit: {type: String, default: 'count', required: false}
  },
  HKWeatherTemperature: {type: String, required: false},
  WorkoutRoute: {
    creationDate: {type: String, required: false},
    startDate: {type: String, required: false},
    endDate: {type: String, required: false},
    FileReference: {type: String, required: false},
    HKMetadataKeySyncIdentifier: {type: String, required: false},
  }
})

let Indoor = mongoose.model('Indoor', insideSchema);
let Outdoor = mongoose.model('Outdoor', outsideSchema);

module.exports = { Indoor, Outdoor };
