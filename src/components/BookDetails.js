import React from "react";

const BookDetails = ({ book }) => {
  console.log("Book details:", book);
  return (
    <div className="book-details">
      <img src={book.image} alt={`Cover of ${book.title}`} />
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Description: {book.description}</p>
    </div>
  );
};

export default BookDetails;
