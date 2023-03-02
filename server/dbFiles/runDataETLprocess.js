const mongoose = require('mongoose');
const RunData = require('./models').RunData;
const Run = require('./models').Run;
const averageCalculator = require('../helpers').averageCalculator;

mongoose.connect('mongodb://localhost:27017/rundb');

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
      jan21.monthAvg = new Date('01/01/2021');
      jan21.count = 7;
      feb21.monthAvg = new Date('02/01/2021');
      feb21.count = 3;
      mar21.monthAvg = new Date('03/01/2021');
      mar21.count = 2;
      apr21.monthAvg = new Date('04/01/2021');
      apr21.count = 1;
      jun21.monthAvg = new Date('06/01/2021');
      jun21.count = 7;
      jul21.monthAvg = new Date('07/01/2021');
      jul21.count = 4
      aug21.monthAvg = new Date('08/01/2021');
      aug21.count = 8;
      sep21.monthAvg = new Date('09/01/2021');
      sep21.count = 3;
      oct21.monthAvg = new Date('10/01/2021');
      oct21.count= 2
      nov21.monthAvg = new Date('11/01/2021');
      nov21.count = 4
      dec21.monthAvg = new Date('12/01/2021');
      dec21.count = 4
      jan22.monthAvg = new Date('01/01/2022');
      jan22.count = 7
      feb22.monthAvg = new Date('02/01/2022');
      feb22.count = 6
      mar22.monthAvg = new Date('03/01/2022');
      mar22.count = 4
      apr22.monthAvg = new Date('04/01/2022');
      apr22.count = 8
      may22.monthAvg = new Date('05/01/2022');
      may22.count = 10;
      jun22.monthAvg = new Date('06/01/2022');
      jun22.count = 11;
      jul22.monthAvg = new Date('07/01/2022');
      jul22.count = 12
      aug22.monthAvg = new Date('08/01/2022');
      aug22.count = 16;
      sep22.monthAvg = new Date('09/01/2022');
      sep22.count = 15;
      oct22.monthAvg = new Date('10/01/2022');
      oct22.count = 16
      nov22.monthAvg = new Date('11/01/2022');
      nov22.count = 12
      dec22.monthAvg = new Date('12/01/2022');
      dec22.count = 16
      jan23.monthAvg = new Date('01/01/2023');
      jan23.count = 17;
      feb23.monthAvg = new Date('02/01/2023'); 
      feb23.count = 10;

      
      return RunData.create([jan21, feb21, mar21, apr21, jun21, jul21, aug21, sep21, oct21, nov21, dec21,
      jan22, feb22, mar22, apr22, may22, jun22, jul22, aug22, sep22, oct22, nov22, dec22, jan23, feb23]);
    })

}

//       const averages = averageCalculator(data);
      // averages.startDate = newDate;
      // averages.endDate = new Date();
      // return RunData.create(averages);


loadMonthAverages();

