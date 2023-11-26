/**
  You need to create a HTTP server in Node.js which will handle the logic of an authentication server.
  - Don't need to use any database to store the data.

  - Save the users and their signup/login data in an array in a variable
  - You can store the passwords in plain text (as is) in the variable for now

  The expected API endpoints are defined below,
  1. POST /signup - User Signup
    Description: Allows users to create an account. This should be stored in an array on the server, and a unique id should be generated for every new user that is added.
    Request Body: JSON object with username, password, firstName and lastName fields.
    Response: 201 Created if successful, or 400 Bad Request if the username already exists.
    Example: POST http://localhost:3000/signup

  2. POST /login - User Login
    Description: Gets user back their details like firstname, lastname and id
    Request Body: JSON object with username and password fields.
    Response: 200 OK with an authentication token in JSON format if successful, or 401 Unauthorized if the credentials are invalid.
    Example: POST http://localhost:3000/login

  3. GET /data - Fetch all user's names and ids from the server (Protected route)
    Description: Gets details of all users like firstname, lastname and id in an array format. Returned object should have a key called users which contains the list of all users with their email/firstname/lastname.
    The users username and password should be fetched from the headers and checked before the array is returned
    Response: 200 OK with the protected data in JSON format if the username and password in headers are valid, or 401 Unauthorized if the username and password are missing or invalid.
    Example: GET http://localhost:3000/data

  - For any other route not defined in the server return 404

  Testing the server - run `npm run test-authenticationServer` command in terminal
 */

const express = require("express");
const bodyParser = require("body-parser");
const uuid = require("uuid");  // Using the uuid library to generate unique IDs

const app = express();  // Create an Express application
const PORT = 3000;

app.use(bodyParser.json());  // Middleware to parse JSON in the request body

const users = [];  // Array to store user data

// Function to check if a username already exists
const isUsernameTaken = (username) => {
  return users.some((user) => user.username === username);
};

// Function to find a user by username and password
const findUser = (username, password) => {
  return users.find((user) => user.username === username && user.password === password);
};

// Middleware to validate authentication for protected routes
const authenticate = (req, res, next) => {
  const username = req.headers.username;
  const password = req.headers.password;

  // Check if username and password are present and valid
  if (!username || !password || !findUser(username, password)) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // Continue to the next middleware or route handler
  next();
};

// POST /signup - User Signup
app.post("/signup", (req, res) => {
  const { username, password, firstName, lastName } = req.body;

  // Check if required fields are present in the request body
  if (!username || !password || !firstName || !lastName) {
    return res.status(400).json({ message: "Bad Request" });
  }

  // Check if the username is already taken
  if (isUsernameTaken(username)) {
    return res.status(400).json({ message: "Username already exists" });
  }

  // Create a new user object
  const newUser = {
    id: uuid.v4(),  // Generate a unique ID
    username,
    password,
    firstName,
    lastName,
  };

  // Add the new user to the array
  users.push(newUser);

  // Respond with a success message and the user data
  res.status(201).json({ message: "User created successfully", user: newUser });
});

// POST /login - User Login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Find the user based on the provided username and password
  const user = findUser(username, password);

  // Check if the user is found
  if (!user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // Respond with a success message and user data (excluding password)
  res.status(200).json({
    message: "Login successful",
    user: {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
    },
  });
});

// GET /data - Fetch all user's names and ids from the server (Protected route)
app.get("/data", authenticate, (req, res) => {
  // Map user data to include only id, firstName, and lastName
  const userArray = users.map((user) => ({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
  }));

  // Respond with the array of user data
  res.status(200).json({ users: userArray });
});

// For any other route not defined in the server return 404
app.use((req, res) => {
  res.status(404).json({ message: "Not Found" });
});

// Export the app for testing
module.exports = app;

// Uncomment the line below when running the server manually
// app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
