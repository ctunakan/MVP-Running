const Run = require('./models.js');

const getAll = (optionsObj) => {
  let obj = optionsObj || {};
  return Run.find(obj);
}

const getTrends = () => {
  let date = new Date();
  let month = date.getMonth();
  let oneAgo = month - 1;
  let twoAgo = month - 2;
  let threeAgo = month - 3;

  date.setMonth(oneAgo);
  const oneAgoJSON = date.toJSON();
  console.log(oneAgoJSON)
  date.setMonth(twoAgo);
  const twoAgoJSON = date.toJSON();
  date.setMonth(threeAgo);
  const threeAgoJSON = date.toJSON();

  return Run.where('workoutDate').lte(threeAgoJSON)
    .then(dataOne => {
      let concatOne = [];
      concatOne.push(dataOne)
      return Run.where('workoutDate').gte(threeAgoJSON).lte(twoAgoJSON)
        .then(dataTwo => {
          concatOne.push(dataTwo);
          return concatOne;
        });
    })
    .then((data) => {
      let concatTwo = data;
      return Run.where('workoutDate').gte(twoAgoJSON).lte(oneAgoJSON)
        .then(dataThree => {
          concatTwo.push(dataThree);
          return concatTwo;
        })
    })
    .then((data) => {
      let concatThree = data;
      return Run.where('workoutDate').gte(oneAgoJSON)
        .then(dataNow => {
          concatThree.push(dataNow);
          return concatThree;
        })
    })
    
}


module.exports.getAll = getAll;
module.exports.getTrends = getTrends;
