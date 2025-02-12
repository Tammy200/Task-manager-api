# Task Manager API 📝

# Overview
The Task Manager API is a RESTful backend service that allows users to create, update, delete, and manage their tasks efficiently. This API is built with Node.js and Express and uses MongoDB for data storage.

## Features
- **User Authentication**: Secure login and registration with JWT.
- **Task Management**: Create, update, delete, and list tasks.
- **Task Status Tracking**: Categorize tasks (pending, in-progress, completed).
- **Priority & Deadlines**: Assign priorities and due dates.
- **Secure API Access**: Protected routes requiring authentication.

## Technologies used
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB (Mongoose ORM).
- **Authentication**: JWT, bcrypt.
- **Other Tools**:
  - dotenv to load environment variables.
  -  CORS for Cross-Origin Resource Sharing.
  -  Nodemon for automatic server refreshes
  -  Postman (for testing).

## Installation & Setup

### Prerequisites

**Ensure you have Node.js, MongoDB, and Git installed.**

Clone the repository

```bash
git clone https://github.com/yourusername/task-manager-api.git
cd task-manager-api
```
Install dependencies
```bash
npm install
OR
npm install bcrypt cors express jsonwebtoken mongoose nodemon
```

### Set up environment variables
Create a `.env` file in the root directory and add:
```plaintext
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

**Run the server**
```bash
npm start
```

**or in development mode:**
```bash
npm run dev
```

## API Endpoints  

### **Auth Routes**  
| Endpoint           | Method | Description                |
|-------------------|--------|----------------------------|
| `/api/auth/register` | POST   | Register a new user       |
| `/api/auth/login`    | POST   | Authenticate user & get JWT |

### **Task Routes (Protected)**  
| Endpoint       | Method | Description               |
|---------------|--------|---------------------------|
| `/api/tasks`  | GET    | Get all user tasks        |
| `/api/tasks/:id` | GET    | Get a single task        |
| `/api/tasks`  | POST   | Create a new task         |
| `/api/tasks/:id` | PUT    | Update an existing task  |
| `/api/tasks/:id` | DELETE | Delete a task            |
### **Use Postman or cURL to test these endpoints.**

## Usage
- Register a new user via `/api/auth/register`.
- Log in to receive an authentication token.
- Use the token in the Authorization header to access task-related endpoints.
- Create, update, delete, and retrieve tasks using the available endpoints.

##  Project Structure
- `server.js`: Main server file.
- `routes/`: Defines API endpoints.
- `models/`: Mongoose schemas for users and tasks.
- `controllers/`: Logic for handling requests.
- `middleware/`: Authentication middleware.

## Contributing
1.  Fork the repository.
2.  Create a feature branch:
```bash
 git checkout -b feature-name
```
3.  Commit your changes:
```bash
git commit -m "Add your message"
```

4.  Push the branch and create a pull request.

## License
This project is open-source and available under the MIT License.
