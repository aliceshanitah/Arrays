const books = require("./books.js");
// console.log(books);
// for (let i = 0; i<books.length; i++) {
//     const author = books[i].author;
//     const title =books[i].title;
//     var message2 = `Book : ${title}; `
//      var message =`Author : ${author}`;

//      console.log(message2);
//    console.log(message);
// }
// // for (let index = 0; index < array.length; index++) {
// //     const element = array[index];

// for (let i = 0; i< books.length; i++) {
//     if ( i>350) {

//     } else {
//         const title = books[i].pages;
//     var message3 = `${title}`
//     console.log(message3);
//     }
// }

//

module.exports = class BooksController {

  constructor() {
    this.books = books;
  }
  getBooks = () => {
    return books;
  };

  getOnly = ($field) => {
    const filtered = [];

    for (let index in books) {
      filtered.push(`Book ${$field} is: ` + books[index][$field]);
    }

    return filtered;
  };

  /**
   * Get Field Where
   * @param string $field
   * @param array $where 
   * filed will stand for the book field of property you need 
   * to filter form the object
   * $where is an array ['field', 'condition', 'value']
   * @return array [array of filetered values]
   */
  getFieldWhere =  ($field, $where) => {
      const filtered = [];
      for (let index in books) {
          
        if(books[index][$field]){
            if(eval((books[index][$where[0]] + " " + $where[1] + " " + " " + $where[2]).toString())){
                filtered.push(`${$field.toUpperCase()} : `+  this.books[index][$field])
            }
        }
      }

      return filtered;
  }
};
