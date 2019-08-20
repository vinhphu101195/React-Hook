import React, { createContext, useState } from "react";
import uuid from "uuid/v1";

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: "toi di code dao", author: "toidicodedao", id: 1 },
    { title: "Three Kingdoms", author: "Luó Guànzhong", id: 2 }
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuid() }]);
  };
  return <div />;
};

export default BookContextProvider;
