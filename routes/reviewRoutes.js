const express = require('express');
const router = express.Router();
const Review = require('../models/Review');
const { getReviewsForBook, submitReview } = require('../controllers/reviewController');

// GET /reviews?bookId=xxx
router.get('/', async (req, res) => {
  try {
    const { bookId } = req.query;
    if (!bookId) return res.status(400).json({ error: 'bookId is required' });

    const reviews = await Review.find({ bookId }).populate('userId', 'username');
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get reviews for a specific book
router.get('/', getReviewsForBook);

// Submit a new review for a book
router.post('/', submitReview);

// POST /reviews
router.post('/', async (req, res) => {
  try {
    const { bookId, userId, rating, comment } = req.body;

    if (!bookId || !userId || !rating || !comment) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newReview = new Review({ bookId, userId, rating, comment });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
