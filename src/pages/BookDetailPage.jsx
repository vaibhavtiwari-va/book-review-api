import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BookDetailPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(1);

  useEffect(() => {
    axios.get(`/api/books/${id}`)
      .then(res => setBook(res.data))
      .catch(err => console.error(err));

    axios.get(`/api/reviews?bookId=${id}`)
      .then(res => setReviews(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const submitReview = () => {
    axios.post('/api/reviews', { bookId: id, reviewText, rating })
      .then(res => setReviews([...reviews, res.data.review]))
      .catch(err => console.error(err));
  };

  if (!book) return <p>Loading...</p>;

  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <h2>Reviews</h2>
      <div>
        {reviews.map(review => (
          <div key={review._id}>
            <p>{review.reviewText}</p>
            <p>Rating: {review.rating}</p>
          </div>
        ))}
      </div>
      <div>
        <textarea value={reviewText} onChange={(e) => setReviewText(e.target.value)} />
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>
        <button onClick={submitReview}>Submit Review</button>
      </div>
    </div>
  );
};

export default BookDetailPage;
