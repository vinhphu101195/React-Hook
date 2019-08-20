import React from "react";
import BookContextProvider from "./contexts/BookContext";
import Navbar from "./component/Navbar";
import BookList from "./component/BookList";
import Bookform from "./component/Bookform";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <Bookform />
      </BookContextProvider>
    </div>
  );
}

export default App;
