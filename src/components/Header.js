import React from "react";
import bookstore from "../assets/image/bookstore.jpg";
const Header = () => {
  return (
    <>
      <div className="book-stall">
        <img src={bookstore} alt="Book Stall Logo" className="logo" />{" "}
        <h1>Book Store</h1>
      </div>
    </>
  );
};

export default Header;
