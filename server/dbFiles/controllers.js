const { Run, RunData } = require('./models.js');

const getAllRuns = (optionsObj) => {
  let obj = optionsObj || {};
  return Run.find(obj);
}

const getLastRun = () => {
  return Run.find({}).sort('-workoutDate').limit(1);
}

const addRun = (obj) => {
  return Run.create(obj);
}

const getMonthAvg = (monthStr) => {
  return RunData.find({ monthAvg: monthStr});
}

//instead of making complex query, can just compare current month average 
//to last month avg
const getTrends = () => {
  let dateOne = new Date('1/1/21');
  let dateTwo = new Date('1/1/21');
  let currentDate = new Date()
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  dateOne.setMonth(currentMonth - 1)// this needs to be -1  b/c march has no data
  dateOne.setFullYear(currentYear); 
  
  dateTwo.setMonth(currentMonth - 2) // this needs to be -2 because march has no data
  dateTwo.setFullYear(currentYear);
  // console.log('this is dateOne', dateOne, 
  // 'this is dateOne', dateTwo);

  // return RunData.find({ monthAvg: dateOne});
  return RunData.where('monthAvg').equals(dateOne)
    .then((currentData) => {
      let result = [];
      result.push(currentData[0])
      return RunData.where('monthAvg').equals(dateTwo)
        .then((previousData) => {
          result.push(previousData[0]);
          // console.log(dataArr)
          return result;
        });
    });
}


module.exports.getAllRuns = getAllRuns;
module.exports.addRun = addRun;
module.exports.getLastRun = getLastRun;
module.exports.getTrends = getTrends;
module.exports.getMonthAvg = getMonthAvg;
