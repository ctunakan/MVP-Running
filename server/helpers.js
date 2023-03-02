const averageCalculator = (dataArr) => {
  let distSum = 0;
  let pacSum = 0;
  let durationSum = 0;
  let count = 0;
// use get and set month
  dataArr.forEach(obj => {
    pacSum += obj.pace.average;
    distSum += obj.distance;
    durationSum += obj.durationMinutes;
    count++;
  });

  const distAvg = distSum / count;
  const pacAvg = pacSum / count;
  const durationAvg = durationSum / count;

  let result = {avgDistance: distAvg, avgPace: pacAvg, avgDuration: durationAvg};
  return result;
}

module.exports.averageCalculator = averageCalculator;
