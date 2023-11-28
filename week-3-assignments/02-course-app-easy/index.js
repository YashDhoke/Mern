const express = require('express');
const app = express();

app.use(express.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];

// Admin routes
app.post('/admin/signup', (req, res) => {
  
    const {username , password} = req.body ; 

    if(ADMINS.some(admin => admin.username === username)) 
    {
       return res.status(400).json({error : "Admin with this username already exists"}) ; 
    }

    const newadmin = {username , password} ; 
    ADMINS.push(newadmin) ; 
    res.status(201).json({message : "Admin signed up Successfully"}) ; 
});

app.post('/admin/login', (req, res) => {
   const {username , password} = req.body ; 

   const admin = ADMINS.find(admin => admin.username === username && admin.password === password) 

   if(!admin) 
   {
      res.status(401).json({Error : "Invalid Credentials"}) ; 
   }
   else 
   {
      res.status(200).json({message : "Admin loged in Successfully"}) ; 
   }
});



app.post('/admin/courses', (req, res) => {
   const {coursename} = req.body ; 

   const newcourse = {id : COURSES.length+1 , name : coursename} ; 
   COURSES.push(newcourse) ; 
   res.status(201).json({message : "Course created Successfully" , course : newcourse}) ; 
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
