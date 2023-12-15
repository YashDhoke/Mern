const express = require('express');
const app = express();
const jwt = require('jsonwebtoken') ; 

app.use(express.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];

const secretKey = 'secr3t' ; 
const generateJwt = (user) => {
  const payload = { username: user.username, };
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
};

const authenticateJwt = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

// Admin routes
app.post('/admin/signup', (req, res) => {
  const {username , password} = req.body ; 
  const admin = ADMINS.find(admin => admin.username === username) ; 

  if(admin) 
  {
    res.status(400).json({error : "Admin with this username already exits"}) ; 
  }
  else 
  {
    const newadmin = {username , password} ; 
    ADMINS.push(newadmin) ; 
    const token = generateJwt(admin) ; 
    res.json({message : "Admin created successfully!" , token}) ; 
  }
});

app.post('/admin/login', (req, res) => {
  const {username , password} = req.body ; 
  const admin = ADMINS.find(admin => admin.password === password && admin.username === username) 
  
  if(!admin) 
  {
    res.status(400).json({error : "Invalid Credentials"}) ; 
  } 
  else 
  {
    const token = generateJwt(admin) ; 
    res.status(200).json({message :"Logged in Successfully!" , token}) ; 
  }
});

app.post('/admin/courses', (req, res) => {
  
});

app.put('/admin/courses/:courseId', (req, res) => {
  // logic to edit a course
});

app.get('/admin/courses', (req, res) => {
  // logic to get all courses
});

// User routes
app.post('/users/signup', (req, res) => {
  // logic to sign up user
});

app.post('/users/login', (req, res) => {
  // logic to log in user
});

app.get('/users/courses', (req, res) => {
  // logic to list all courses
});

app.post('/users/courses/:courseId', (req, res) => {
  // logic to purchase a course
});

app.get('/users/purchasedCourses', (req, res) => {
  // logic to view purchased courses
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
