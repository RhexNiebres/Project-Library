const myLibrary = [];

function Book(title,author,pages,read){
this.title = title;
this.author = author;
this.pages = pages;
this.read = read;
// this.info = function() {
//     console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${pages}, ${read} `)
}



function addBookToLibrary(title,author,pages,read){//funtion to add new book in the constructor
const newBook = new Book(title,author,pages,read)
myLibrary.push(newBook);//add book to array
displayBooks();
}

Book.prototype.toggleRead = function() { // Method to toggle the read status
this.read = !this.read;
};

function displayBooks() { //display books in the library
const libraryDiv = document.getElementById('library');
libraryDiv.innerHTML = ''; // Clear existing books
myLibrary.forEach((book, index) => {
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';
    bookCard.innerHTML = `
        <p>Title:${book.title}</p>
        <p>Author:${book.author}</p>
        <p>Pages:${book.pages}</p>
        <p>Read:${book.read ? 'Yes' : 'No'}</p> 
        <button onclick="removeBook(${index})">Remove</button>
    `;
    libraryDiv.appendChild(bookCard); // Append within the loop
});
}

function toggleReadStatus(index) { 
myLibrary[index].toggleRead(); //switch back and forth
displayBooks(); 
}

function removeBook(index) {  //remove book
myLibrary.splice(index, 1);
displayBooks();
}

document.getElementById('new-book-button').onclick = () => { // show form
document.getElementById('book-form').style.display = 'block';
};

document.getElementById('cancel-button').onclick = () => { //cancel adding a book
document.getElementById('book-form').style.display = 'none';
};

document.getElementById('form').onsubmit = (event) => {
event.preventDefault(); // prevent data submission to a server
const title = document.getElementById('title').value;
const author = document.getElementById('author').value;
const pages = document.getElementById('pages').value;
const read = document.getElementById('read').checked;
addBookToLibrary(title, author, pages, read);
document.getElementById('form').reset();
document.getElementById('book-form').style.display = 'none';
};