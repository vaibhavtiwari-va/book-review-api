const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();


const bookRoutes = require('./routes/bookRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const userRoutes = require('./routes/userRoutes');
const gptRoutes = require('./routes/gptRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/books', bookRoutes);
app.use('/reviews', reviewRoutes);
app.use('/users', userRoutes);
app.use('/gpt', gptRoutes);

module.exports = app;
