import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BookListPage = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get(`/api/books?search=${search}`)
      .then(res => setBooks(res.data))
      .catch(err => console.error(err));
  }, [search]);

  return (
    <div>
      <h1>Books List</h1>
      <input 
        type="text" 
        placeholder="Search books..." 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
      />
      <div>
        {books.map(book => (
          <div key={book._id}>
            <Link to={`/book/${book._id}`}>
              <h2>{book.title}</h2>
            </Link>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookListPage;
