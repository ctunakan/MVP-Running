require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const logRequests = require('./requestLogger');
const db = require('./dbFiles/index');
const { getAll, getTrends } = require('./dbFiles/controllers');
const helpers = require('./helpers');

const app = express();

app.use(cors());
app.use(express.json());
app.use(logRequests);
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
//build routes

app.get('/averages', (req, res) => {
  // const queryParams = req.body.params;
  getAll()
    .then(data => {
      const averages = helpers.averageCalculator(data);
      // console.log(averages);
      res.send(averages);
    })
})

app.get('/trends', (req, res) => {
  getTrends()
    .then(data => {
      const averageSixAgo = helpers.averageCalculator(data[0])
      const lastMonth = helpers.averageCalculator(data[1]);
      // console.log('6 months to today:', averageSixAgo,
      //  '\npast month', lastMonth);
      const paceTrend = lastMonth.avgPace - averageSixAgo.avgPace;
      const distanceTrend = lastMonth.avgDistance - averageSixAgo.avgDistance;
      const result = { paceTrend, distanceTrend }; 
      res.send(result)
    });
})



app.listen(process.env.PORT);
console.log(`Server listening at http://localhost:${process.env.PORT}`);
