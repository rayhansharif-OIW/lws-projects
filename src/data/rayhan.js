import data from "./Data.js";
let name1 = "crack";
// data.map((book) => console.log(book.bookName));
let updatedBookList = data.filter((book) =>
  book.bookName.toLowerCase().includes(name1.toLowerCase())
);

console.log(updatedBookList);
