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
  console.log(new Date('2023-01-01'))
  getAll({workoutDate: { $lte: new Date('2023-01-01')}})
    .then(data => {
      const averages = helpers.averageCalculator(data);
      console.log(averages);
      res.send(averages);
    })
})

app.get('/trends', (req, res) => {
  getTrends()
    .then(data => {
      const averageThreeAgo = helpers.averageCalculator(data[0])
      const averageTwoAgo = helpers.averageCalculator(data[1])
      const averageOneAgo = helpers.averageCalculator(data[2])
      const lastMonth = helpers.averageCalculator(data[3]);
      console.log('three ago:', averageThreeAgo,
       'two ago:', averageTwoAgo,
       'one ago:', averageOneAgo,
       'past month', lastMonth);
      res.send('completed')
    });
})



app.listen(process.env.PORT);
console.log(`Server listening at http://localhost:${process.env.PORT}`);
