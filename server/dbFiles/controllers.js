const { Run, RunData } = require('./models.js');


const getAllRuns = (optionsObj) => {
  let obj = optionsObj || {};
  return Run.find(obj);
}

const getMonthAvg = (monthStr) => {
  return RunData.find({ monthAvg: monthStr});
}

const getTrends = () => {
  let date = new Date();
  let month = date.getMonth();
  let oneAgo = month - 1;
  let sixAgo = month - 6;
  // let threeAgo = month - 3;

  date.setMonth(oneAgo);
  const oneAgoJSON = date.toJSON();
  date.setMonth(sixAgo);
  const sixAgoJSON = date.toJSON();
  // date.setMonth(threeAgo);
  // const threeAgoJSON = date.toJSON();

  return Run.where('workoutDate').gte(sixAgoJSON)
    .then(dataOne => {
      let monthAverages = [];
      monthAverages.push(dataOne)
      return Run.where('workoutDate').gte(oneAgoJSON)
        .then(data => {
          monthAverages.push(data);
          return monthAverages;
        });
    });
}


module.exports.getAllRuns = getAllRuns;
module.exports.getTrends = getTrends;
module.exports.getMonthAvg = getMonthAvg;
