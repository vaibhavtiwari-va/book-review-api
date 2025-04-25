const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// GET /books
router.get('/', async (req, res) => {
  const books = await Book.find().limit(20); // Add pagination later
  res.json(books);
});

// GET /books/:id
router.get('/:id', async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).send('Book not found');
  res.json(book);
});

// POST /books (Admin only logic can be added)
router.post('/', async (req, res) => {
  const newBook = new Book(req.body);
  await newBook.save();
  res.status(201).json(newBook);
});

module.exports = router;
