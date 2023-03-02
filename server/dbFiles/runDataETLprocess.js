const mongoose = require('mongoose');
const RunData = require('./models').RunData;
const Run = require('./models').Run;
const averageCalculator = require('../helpers').averageCalculator;

mongoose.connect('mongodb://localhost:27017/rundb');

// const getlastMonthData = () => {
//   const today = new Date();
//   let newDate = new Date()
//   let monthAgo = newDate.getMonth() - 1;
//   newDate.setMonth(monthAgo);
//   // console.log(today);
//   // console.log(newDate)
//   // console.log(Date(dateMonthAgo))
//   return Run.find({ workoutDate: { $gte: newDate}})
//     .then(data => {
//       const averages = averageCalculator(data);
//       averages.startDate = newDate;
//       averages.endDate = new Date();
//       return RunData.create(averages);
//     });
// }

const loadMonthAverages = () => {
  return Run.find({})
    .then(data => {
      const jan21 = averageCalculator(data.slice(0, 7))
      const feb21 = averageCalculator(data.slice(7, 10))
      const mar21 = averageCalculator(data.slice(10, 12))
      const apr21 = averageCalculator(data.slice(12, 13))
      const jun21 = averageCalculator(data.slice(13, 21))
      const jul21 = averageCalculator(data.slice(21, 25))
      const aug21 = averageCalculator(data.slice(26, 33))
      const sep21 = averageCalculator(data.slice(33, 36))
      const oct21 = averageCalculator(data.slice(36, 38))
      const nov21 = averageCalculator(data.slice(38, 42))
      const dec21 = averageCalculator(data.slice(43, 46))
      const jan22 = averageCalculator(data.slice(46, 53))
      const feb22 = averageCalculator(data.slice(53, 58))
      const mar22 = averageCalculator(data.slice(58, 63))
      const apr22 = averageCalculator(data.slice(63, 70))
      const may22 = averageCalculator(data.slice(70, 80))
      const jun22 = averageCalculator(data.slice(80, 91))
      const jul22 = averageCalculator(data.slice(91, 103))
      const aug22 = averageCalculator(data.slice(103, 119))
      const sep22 = averageCalculator(data.slice(119, 134))
      const oct22 = averageCalculator(data.slice(135, 150))
      const nov22 = averageCalculator(data.slice(150, 162))
      const dec22 = averageCalculator(data.slice(162, 176))
      const jan23 = averageCalculator(data.slice(176, 192))
      const feb23 = averageCalculator(data.slice(192));
      jan21.monthAvg = 'jan21';
      feb21.monthAvg = 'feb21';
      mar21.monthAvg = 'mar21';
      apr21.monthAvg = 'apr21';
      jun21.monthAvg = 'jun21';
      jul21.monthAvg = 'jul21';
      aug21.monthAvg = 'aug21';
      sep21.monthAvg = 'sep21';
      oct21.monthAvg = 'oct21';
      nov21.monthAvg = 'nov21';
      dec21.monthAvg = 'dec21';
      jan22.monthAvg = 'jan22';
      feb22.monthAvg = 'feb22';
      mar22.monthAvg = 'mar22';
      apr22.monthAvg = 'apr22';
      may22.monthAvg = 'may22';
      jun22.monthAvg = 'jun22';
      jul22.monthAvg = 'jul22';
      aug22.monthAvg = 'aug22';
      sep22.monthAvg = 'sep22';
      oct22.monthAvg = 'oct22';
      nov22.monthAvg = 'nov22';
      dec22.monthAvg = 'dec22';
      jan23.monthAvg = 'jan23';
      feb23.monthAvg = 'feb23'; 
      
      return RunData.create([jan21, feb21, mar21, apr21, jun21, jul21, aug21, sep21, oct21, nov21, dec21,
      jan22, feb22, mar22, apr22, may22, jun22, jul22, aug22, sep22, oct22, nov22, dec22, jan23, feb23]);
    })

}

//       const averages = averageCalculator(data);
      // averages.startDate = newDate;
      // averages.endDate = new Date();
      // return RunData.create(averages);


loadMonthAverages();

