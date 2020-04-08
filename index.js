const BooksController = require('./bookscontroller');

//get book title where pages are above 300
console.log(new BooksController().getFieldWhere("title", ["pages", ">", 300]));

console.log(new BooksController().getOnly('pages'));
