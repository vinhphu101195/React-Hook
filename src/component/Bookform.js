import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const Bookform = () => {
  // const { addBook } = useContext(BookContext);
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    // addBook(title, author);
    dispatch({
      type: "ADD_BOOK",
      book: {
        title,
        author
      }
    });
    setTitle("");
    setAuthor("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        placeholder="book title write here"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <input
        className="input"
        type="text"
        placeholder="book author write here"
        value={author}
        onChange={e => setAuthor(e.target.value)}
        required
      />
      <input type="submit" value="add book" className="button-submit" />
    </form>
  );
};

export default Bookform;
