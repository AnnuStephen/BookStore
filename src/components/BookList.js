import React from "react";

const BookList = ({ books, category, onBookClick }) => {
  return (
    <div className="book-list">
      <h2>{category} Books</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index} onClick={() => onBookClick(book)}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
