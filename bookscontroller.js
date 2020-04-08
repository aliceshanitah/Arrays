const books = require ("./books.js")
console.log(books);
for (let i = 0; i<books.length; i++) {
    const author = books[i].author;
    const title =books[i].title;
    var message2 = `Book : ${title}; `
     var message =`Author : ${author}`;
     
     console.log(message2);
   console.log(message);
}
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    

for (let i = 0; i< books.length; i++) {
    if ( i>350) {
        
    } else {
        const title = books[i].pages;
    var message3 = `${title}`
    console.log(message3);
    }
}
    
    
