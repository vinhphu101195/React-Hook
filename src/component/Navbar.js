import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

export default function Navbar() {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Phu reading Book</h1>
      <p> Currently you have {books.length} book to get through...</p>
    </div>
  );
}
