# 📚 Book Review Application - API Testing Guide

## 🎉 **PROJECT COMPLETED SUCCESSFULLY!**

All **14 Tasks** have been implemented and tested. The complete Book Review Application is ready for use!

## 🚀 **Quick Start**

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the server:**
   ```bash
   npm start
   ```
   Server runs on: `http://localhost:5000`

## 📋 **Implemented Features**

### ✅ **Public Endpoints (Tasks 1-5)**
- **Task 1:** Get all books with JSON formatting
- **Task 2:** Get book details by ISBN
- **Task 3:** Get books by author (case-insensitive search)
- **Task 4:** Get books by title (case-insensitive search)  
- **Task 5:** Get book reviews by ISBN

### ✅ **Authentication System (Tasks 6-9)**
- **Task 6:** User registration with validation
- **Task 7:** User login with JWT token authentication
- **Task 8:** Add/modify book reviews (authenticated users)
- **Task 9:** Delete book reviews (user can only delete their own)

### ✅ **Async/Await Implementation (Tasks 10-13)**
- **Task 10:** Async version of get all books
- **Task 11:** Async version of get book by ISBN
- **Task 12:** Async version of get books by author
- **Task 13:** Async version of get books by title

### ✅ **Version Control (Task 14)**
- All code committed and pushed to GitHub: `https://github.com/prishi003/expressBookReviews.git`

## 🧪 **API Endpoints**

### Public Routes
```
GET    /                              - Get all books
GET    /isbn/:isbn                   - Get book by ISBN
GET    /author/:author               - Get books by author
GET    /title/:title                 - Get books by title
GET    /review/:isbn                 - Get book reviews
POST   /register                     - Register new user
```

### Authentication Routes
```
POST   /customer/login               - User login
PUT    /customer/auth/review/:isbn   - Add/modify review
DELETE /customer/auth/review/:isbn   - Delete review
```

### Async Routes (Tasks 10-13)
```
GET    /async                        - Get all books (async)
GET    /async/isbn/:isbn             - Get book by ISBN (async)
GET    /async/author/:author         - Get books by author (async)
GET    /async/title/:title           - Get books by title (async)
```

## 🔧 **Testing with Postman or cURL**

### 1. Test Public Endpoints
```bash
# Get all books
GET http://localhost:5000/

# Get book by ISBN
GET http://localhost:5000/isbn/1

# Get books by author
GET http://localhost:5000/author/Chinua Achebe
```

### 2. User Registration & Login
```bash
# Register user
POST http://localhost:5000/register
Body: {"username":"testuser","password":"testpass"}

# Login user
POST http://localhost:5000/customer/login  
Body: {"username":"testuser","password":"testpass"}
```

### 3. Authenticated Operations
```bash
# Add review (after login)
PUT http://localhost:5000/customer/auth/review/1?review=Great book!

# Delete review (after login)
DELETE http://localhost:5000/customer/auth/review/1
```

## 📸 **Screenshots Required for Peer Review**

Take screenshots of the following for submission:

1. **1-getallbooks.png** - Task 1 result
2. **2-gedetailsISBN.png** - Task 2 result  
3. **3-getbooksbyauthor.png** - Task 3 result
4. **4-getbooksbytitle.png** - Task 4 result
5. **5-getbookreview.png** - Task 5 result
6. **6-register.png** - Task 6 result
7. **7-login.png** - Task 7 result
8. **8-reviewadded.png** - Task 8 result
9. **9-deletereview.png** - Task 9 result
10. **task10.png** - Task 10 code screenshot
11. **task11.png** - Task 11 code screenshot
12. **task12.png** - Task 12 code screenshot
13. **task13.png** - Task 13 code screenshot

## 🏆 **Project Summary**

This comprehensive Book Review Application includes:

- **RESTful API** with full CRUD operations
- **JWT-based authentication** with session management
- **User registration and login** system
- **Book search functionality** by ISBN, author, and title
- **Review system** with user-specific permissions
- **Async/await implementations** using Promises
- **Complete error handling** and validation
- **Version control** with Git and GitHub integration

## 🔗 **GitHub Repository**
**Repository URL:** https://github.com/prishi003/expressBookReviews.git

---

**🎯 All 14 tasks completed successfully!** Ready for peer review submission. 