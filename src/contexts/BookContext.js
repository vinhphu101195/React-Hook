import React, { createContext, useReducer, useEffect } from "react";
import { bookReducer } from "../reducers/bookReducers";

export const BookContext = createContext();

const BookContextProvider = props => {
  // use State
  //   const [books, setBooks] = useState([
  //     { title: "toi di code dao", author: "toidicodedao", id: 1 },
  //     { title: "Three Kingdoms", author: "Luó Guànzhong", id: 2 }
  //   ]);

  //   const addBook = (title, author) => {
  //     setBooks([...books, { title, author, id: uuid() }]);
  //   };
  //   const removeBook = id => {
  //     setBooks(books.filter(e => e.id !== id));
  //   };

  // Use Reducer
  var initialState = [
    { title: "toi di code dao", author: "toidicodedao", id: 1 },
    { title: "Three Kingdoms", author: "Luó Guànzhong", id: 2 }
  ];

  const [books, dispatch] = useReducer(bookReducer, initialState, () => {
    const localData = localStorage.getItem("books");
    if (localData.length) {
      return initialState;
    } else {
      return localData.length > 2 ? JSON.parse(localData) : initialState;
    }
  });

  // run if books change
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
