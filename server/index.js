require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const logRequests = require('./requestLogger');
const db = require('./dbFiles/index');
const { getAllRuns, addRun, getLastRun, getTrends, getMonthAvg } = require('./dbFiles/controllers');
const helpers = require('./helpers');

const app = express();

app.use(cors());
app.use(express.json());
app.use(logRequests);
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
//build routes

app.get('/runs', (req, res) => {
  getAllRuns()
    .then(data => {
      res.send(data)
    })
})

app.get('/monthlyAvg', (req, res) => {
  let date = new Date('2/1/23')
  const queryParams = req.body.params || date;
  getMonthAvg(queryParams)
    .then(data => {
      // console.log(data)
      const { avgDistance, avgDuration, avgPace } = data[0]
      const averages = { avgDistance, avgDuration, avgPace }; 
      res.send(averages);
    });
})

app.get('/trends', (req, res) => {
  getTrends()
    .then(data => {
      // console.log(data);
      const paceTrend = data[0].avgPace - data[1].avgPace;
      const distanceTrend = data[0].avgDistance - data[1].avgDistance;
      const durationTrend = data[0].avgDuration - data[1].avgDuration;
      const result = { paceTrend, distanceTrend, durationTrend }; 
      res.send(result)
    });
})

app.get('/lastRun', (req,res) => {
  getLastRun()
    .then(data => res.send(data[0]));
});

app.post('/addRun', (req, res) => {
  let runData = req.body;
  addRun(runData)
    .then(data => res.send('run added'));
})


app.listen(process.env.PORT);
console.log(`Server listening at http://localhost:${process.env.PORT}`);
