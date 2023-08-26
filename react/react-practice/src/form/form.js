import React, { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

const Form = () => {
  const [books, setBooks] = useState([]);

  const deleteBookById = (id) => {
    const filteredBook = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(filteredBook);
  };

  const editBookById = (id, newTitle) => {
    const updatedBook = books.map((book) => {
      if (book.id === id) {
        return {
          ...book,
          title: newTitle,
        };
      }
      return book;
    });
    setBooks(updatedBook);
  };

  const handleBookCreate = (title) => {
    const updatedBooks = [
      ...books,
      {
        id: Math.round(Math.random() * 9999),
        title,
      },
    ];
    setBooks(updatedBooks);
  };
  return (
    <div>
      <h1>Reading List</h1>
      <BookList onDelete={deleteBookById} onEdit={editBookById} books={books} />
      <BookCreate onCreate={handleBookCreate} />
    </div>
  );
};

export default Form;
