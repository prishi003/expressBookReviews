const express = require('express');
const axios = require('axios');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username && password) {
    if (!isValid(username)) {
      users.push({"username":username,"password":password});
      return res.status(200).json({message: "User successfully registered. Now you can login"});
    } else {
      return res.status(404).json({message: "User already exists!"});
    }
  }
  return res.status(404).json({message: "Unable to register user."});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  return res.status(200).json(JSON.stringify(books, null, 2));
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  const isbn = req.params.isbn;
  const book = books[isbn];
  if (book) {
    return res.status(200).json(book);
  } else {
    return res.status(404).json({message: "Book not found"});
  }
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  const author = req.params.author;
  const bookKeys = Object.keys(books);
  const filteredBooks = {};
  
  bookKeys.forEach(key => {
    if (books[key].author.toLowerCase() === author.toLowerCase()) {
      filteredBooks[key] = books[key];
    }
  });
  
  if (Object.keys(filteredBooks).length > 0) {
    return res.status(200).json(filteredBooks);
  } else {
    return res.status(404).json({message: "No books found by this author"});
  }
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  const title = req.params.title;
  const bookKeys = Object.keys(books);
  const filteredBooks = {};
  
  bookKeys.forEach(key => {
    if (books[key].title.toLowerCase() === title.toLowerCase()) {
      filteredBooks[key] = books[key];
    }
  });
  
  if (Object.keys(filteredBooks).length > 0) {
    return res.status(200).json(filteredBooks);
  } else {
    return res.status(404).json({message: "No books found with this title"});
  }
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  const isbn = req.params.isbn;
  const book = books[isbn];
  
  if (book) {
    return res.status(200).json(book.reviews);
  } else {
    return res.status(404).json({message: "Book not found"});
  }
});

// Task 10: Get all books using async-await with Axios
public_users.get('/async', async function (req, res) {
  try {
    // Simulating an async operation with a Promise
    const getAllBooks = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(books);
        }, 100);
      });
    };
    
    const booksList = await getAllBooks();
    return res.status(200).json(JSON.stringify(booksList, null, 2));
  } catch (error) {
    return res.status(500).json({message: "Error fetching books", error: error.message});
  }
});

// Task 11: Get book by ISBN using async-await with Axios
public_users.get('/async/isbn/:isbn', async function (req, res) {
  try {
    const isbn = req.params.isbn;
    
    const getBookByISBN = (isbn) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const book = books[isbn];
          if (book) {
            resolve(book);
          } else {
            reject(new Error("Book not found"));
          }
        }, 100);
      });
    };
    
    const book = await getBookByISBN(isbn);
    return res.status(200).json(book);
  } catch (error) {
    return res.status(404).json({message: error.message});
  }
});

// Task 12: Get books by author using async-await with Axios
public_users.get('/async/author/:author', async function (req, res) {
  try {
    const author = req.params.author;
    
    const getBooksByAuthor = (author) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const bookKeys = Object.keys(books);
          const filteredBooks = {};
          
          bookKeys.forEach(key => {
            if (books[key].author.toLowerCase() === author.toLowerCase()) {
              filteredBooks[key] = books[key];
            }
          });
          
          if (Object.keys(filteredBooks).length > 0) {
            resolve(filteredBooks);
          } else {
            reject(new Error("No books found by this author"));
          }
        }, 100);
      });
    };
    
    const filteredBooks = await getBooksByAuthor(author);
    return res.status(200).json(filteredBooks);
  } catch (error) {
    return res.status(404).json({message: error.message});
  }
});

// Task 13: Get books by title using async-await with Axios
public_users.get('/async/title/:title', async function (req, res) {
  try {
    const title = req.params.title;
    
    const getBooksByTitle = (title) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const bookKeys = Object.keys(books);
          const filteredBooks = {};
          
          bookKeys.forEach(key => {
            if (books[key].title.toLowerCase() === title.toLowerCase()) {
              filteredBooks[key] = books[key];
            }
          });
          
          if (Object.keys(filteredBooks).length > 0) {
            resolve(filteredBooks);
          } else {
            reject(new Error("No books found with this title"));
          }
        }, 100);
      });
    };
    
    const filteredBooks = await getBooksByTitle(title);
    return res.status(200).json(filteredBooks);
  } catch (error) {
    return res.status(404).json({message: error.message});
  }
});

module.exports.general = public_users;
