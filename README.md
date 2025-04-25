#  Book Review API

A RESTful API built using **Node.js**, **Express.js**, and **MongoDB** for managing book reviews, user authentication, and admin operations.

---

##  Features

-  User Authentication (JWT-based)
-  Role-based access control (User & Admin)
-  Add, edit, delete, and view book reviews
-  Book catalog management
-  Search and filter functionality
-  MongoDB as the primary database

---

##  Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **JWT** for authentication

---
##  API Endpoints Overview

###  Authentication
- `POST /api/auth/register` – Register a new user
- `POST /api/auth/login` – Log in and get JWT token

###  Books
- `GET /api/books` – Get all books
- `POST /api/books` – Add a new book (Admin only)
- `PUT /api/books/:id` – Edit book details
- `DELETE /api/books/:id` – Delete a book

###  Reviews
- `GET /api/reviews/:bookId` – Get all reviews for a book
- `POST /api/reviews/:bookId` – Add a review for a book
- `PUT /api/reviews/:reviewId` – Edit a review
- `DELETE /api/reviews/:reviewId` – Delete a review

---

##  Testing

You can use **Postman** or **Insomnia** to test the API endpoints. Ensure you include the JWT token in the `Authorization` header for protected routes.

---

##  Author

- **Vaibhav Tiwari**  
  (https://github.com/vaibhavtiwari-va)

---





