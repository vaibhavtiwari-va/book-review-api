const Review = require('../models/Review');

// Controller to get reviews for a book
exports.getReviewsForBook = async (req, res) => {
  const { bookId } = req.query; // Book ID from query string
  try {
    const reviews = await Review.find({ bookId });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reviews', error });
  }
};

// Controller to submit a new review
exports.submitReview = async (req, res) => {
  const { bookId, userId, reviewText, rating } = req.body;
  
  try {
    const review = new Review({ bookId, userId, reviewText, rating });
    await review.save();
    res.status(201).json({ message: 'Review submitted successfully', review });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting review', error });
  }
};
