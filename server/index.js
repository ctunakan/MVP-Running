require('dotenv').config();
const express = require('express');
const cors = require('cors');
const logRequests = require('./requestLogger');

const app = express();

app.use(cors());
app.use(express.json());
app.use(logRequests);

//build routes


app.listen(process.env.PORT);
console.log(`Server listening at http://localhost:${process.env.PORT}`);
