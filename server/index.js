require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const logRequests = require('./requestLogger');
const db = require('./dbFiles/index');

const app = express();

app.use(cors());
app.use(express.json());
app.use(logRequests);
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
//build routes




app.listen(process.env.PORT);
console.log(`Server listening at http://localhost:${process.env.PORT}`);
