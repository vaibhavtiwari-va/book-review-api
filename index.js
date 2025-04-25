const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/userRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();

// Middleware
app.use(express.json()); // To parse JSON request bodies

// Routes
app.use('/api/users', userRoutes);
app.use('/api/reviews', reviewRoutes);

// Connect to MongoDB
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log(' Connected to MongoDB');
    app.listen(3000, () => console.log(' Server running on port 3000'));
  })
  .catch((err) => {
    console.error(' MongoDB connection error:', err);
  });
