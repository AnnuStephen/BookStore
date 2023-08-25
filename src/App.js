import React, { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import Footer from "./components/Footer";
import "./App.css";
import Home from "./components/Home";
import lib3 from "./assets/image/lib3.jpg";
import Login from "./components/Login";
import About from "./components/About";

const App = () => {
  const [currentView, setCurrentView] = useState("home");
  const [currentBook, setCurrentBook] = useState(null);

  const books = [
    {
      title: "Book 1",
      author: "Author 1",
      genre: "Fiction",
      description: "Description of Book 1",
      image: lib3,
    },
    {
      title: "Book 2",
      author: "Author 2",
      genre: "Fiction",
      description: "Description of Book 2",
      image: lib3,
    },
    {
      title: "Book 3",
      author: "Author 3",
      genre: "Non-Fiction",
      description: "Description of Book 3",
      image: lib3,
    },
    {
      title: "Book 4",
      author: "Author 4",
      genre: "Non-Fiction",
      description: "Description of Book 4",
      image: lib3,
    },
    {
      title: "Book 5",
      author: "Author 5",
      genre: "Non-Fiction",
      description: "Description of Book 5",
      image: lib3,
    },
  ];

  const navigate = view => {
    setCurrentView(view);
  };

  const handleBookClick = book => {
    console.log("Clicked on book:", book);
    setCurrentBook(book);
    setCurrentView("details");
  };

  return (
    <div className="app">
      <Header />
      <Navigation navigate={navigate} />

      {currentView === "home" && <Home />}
      {currentView === "login" && <Login />}

      {currentView === "allbooks" && (
        <BookList books={books} category="All" onBookClick={handleBookClick} />
      )}

      {currentView === "fiction" && (
        <BookList
          books={books.filter(book => book.genre === "Fiction")}
          category="Fiction"
        />
      )}
      {currentView === "nonfiction" && (
        <BookList
          books={books.filter(book => book.genre === "Non-Fiction")}
          category="Non-Fiction"
        />
      )}
      {currentView === "about" && <About />}
      {currentView === "details" && currentBook && (
        <BookDetails book={currentBook} />
      )}

      <Footer />
    </div>
  );
};

export default App;
