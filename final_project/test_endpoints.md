# 📚 Book Review Application - API Testing Guide

## Server Setup
First, make sure the server is running:
```bash
npm start
```
The server should be running on `http://localhost:5000`

## 🔓 Public Endpoints Testing

### Task 1: Get all books
```bash
curl -X GET "http://localhost:5000/"
```

### Task 2: Get book by ISBN
```bash
curl -X GET "http://localhost:5000/isbn/1"
```

### Task 3: Get books by author
```bash
curl -X GET "http://localhost:5000/author/Chinua%20Achebe"
```

### Task 4: Get books by title
```bash
curl -X GET "http://localhost:5000/title/Things%20Fall%20Apart"
```

### Task 5: Get book reviews
```bash
curl -X GET "http://localhost:5000/review/1"
```

### Task 6: Register a new user
```bash
curl -X POST "http://localhost:5000/register" \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","password":"testpass"}'
```

## 🔐 Authenticated Endpoints Testing

### Task 7: Login as registered user
```bash
curl -X POST "http://localhost:5000/customer/login" \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","password":"testpass"}' \
  -c cookies.txt
```

### Task 8: Add/Modify book review (requires login)
```bash
curl -X PUT "http://localhost:5000/customer/auth/review/1?review=This%20is%20a%20great%20book!" \
  -H "Content-Type: application/json" \
  -b cookies.txt
```

### Task 9: Delete book review (requires login)
```bash
curl -X DELETE "http://localhost:5000/customer/auth/review/1" \
  -H "Content-Type: application/json" \
  -b cookies.txt
```

## 🚀 Async/Await Endpoints Testing (Tasks 10-13)

### Task 10: Get all books (async)
```bash
curl -X GET "http://localhost:5000/async"
```

### Task 11: Get book by ISBN (async)
```bash
curl -X GET "http://localhost:5000/async/isbn/1"
```

### Task 12: Get books by author (async)
```bash
curl -X GET "http://localhost:5000/async/author/Chinua%20Achebe"
```

### Task 13: Get books by title (async)
```bash
curl -X GET "http://localhost:5000/async/title/Things%20Fall%20Apart"
```

## 📸 Screenshot Files Required for Submission

1. `1-getallbooks.png` - Task 1 result
2. `2-gedetailsISBN.png` - Task 2 result  
3. `3-getbooksbyauthor.png` - Task 3 result
4. `4-getbooksbytitle.png` - Task 4 result
5. `5-getbookreview.png` - Task 5 result
6. `6-register.png` - Task 6 result
7. `7-login.png` - Task 7 result
8. `8-reviewadded.png` - Task 8 result
9. `9-deletereview.png` - Task 9 result
10. `task10.png` - Task 10 code screenshot
11. `task11.png` - Task 11 code screenshot
12. `task12.png` - Task 12 code screenshot
13. `task13.png` - Task 13 code screenshot

## Testing Sequence

1. Test public endpoints (Tasks 1-5)
2. Register a user (Task 6)
3. Login with the user (Task 7)
4. Add a review (Task 8)
5. Delete the review (Task 9)
6. Test async endpoints (Tasks 10-13)
7. Take screenshots of results and code
8. Commit and push to GitHub (Task 14) 