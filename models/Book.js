const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  summary: String,
  coverImage: String,
  rating: Number
});

module.exports = mongoose.model('Book', bookSchema);
