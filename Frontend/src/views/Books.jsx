import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Books.css";

const Books = () => {
  const navigate = useNavigate();

  const books = [
    { title: "Data Structures", author: "Mark Allen Weiss" },
    { title: "Operating Systems", author: "Galvin" },
    { title: "Database Management", author: "Ramakrishnan" },
    { title: "Computer Networks", author: "Andrew Tanenbaum" },
    { title: "Java Programming", author: "Herbert Schildt" },
    { title: "Python Basics", author: "Guido van Rossum" },
  ];

  return (
   
      <div className="books-page">
        {/* HEADER */}
        <header className="books-header">
          <h1>📚 Library Books</h1>
          <button
            className="back-btn"
            onClick={() => navigate("/library")}
          >
            ⬅ Back to Library
          </button>
        </header>

        {/* BOOKS GRID */}
        <div className="books-grid">
          {books.map((book, index) => (
            <div className="book-card" key={index}>
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <button>Read More</button>
            </div>
          ))}
        </div>
      </div>
   
  );
};

export default Books;