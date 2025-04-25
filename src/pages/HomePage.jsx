import React, { useEffect ,useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const HomePage = () => {
  const dispatch = useDispatch();
  const featuredBooks = useSelector(state => state.books.featuredBooks);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/books')  // Adjust the URL based on your backend
    .then(response => {
      setBooks(response.data);  // Assuming the backend sends a list of books
    })
    .catch(error => {
      console.error("There was an error fetching the books!", error);
    });
}, []);

  return (
    <div>
      <h1>Featured Books</h1>
      <div>
        {featuredBooks.map(book => (
          <div key={book._id}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
