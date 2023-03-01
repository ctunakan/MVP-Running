const averageCalculator = (dataArr) => {
  let distSum = 0;
  let pacSum = 0;
  let count = 0;
// use get and set month
  dataArr.forEach(obj => {
    pacSum += obj.pace.average;
    distSum += obj.distance;
    count++;
  });

  const distAvg = distSum / count;
  const pacAvg = pacSum / count;

  let result = {avgDistance: distAvg, avgPace: pacAvg};
  return result;
}

module.exports.averageCalculator = averageCalculator;
