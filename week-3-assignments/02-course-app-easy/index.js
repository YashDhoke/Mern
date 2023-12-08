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
    const courseId = parseInt(req.params.courseId) ; 
    const {coursename} = req.body ;
    
    const courseIndex = COURSES.findIndex(course => course.id === courseId) ; 

    if(courseIndex === -1) 
    {
      return res.status(404).json({error : "Could not find the course!"}) ; 
    }

    COURSES[courseIndex].name = coursename ; 
    res.status(200).json({message : "Course edited successfully!" , course : COURSES[courseIndex]}) ; 
});

app.get('/admin/courses', (req, res) => {
   res.status(200).json({courses : COURSES}) ; 
});

// User routes
app.post('/users/signup', (req, res) => {
  const {username , password } = req.body ; 
  
  if(USERS.some(user => user.username === username)) 
  {
    return res.status(400).json({error : "This user already exists"}) ; 
  }

  const newuser = {username , password} ; 
  USERS.push(newuser) ; 
  res.status(200).json({message : "User signed up successfully!"}) ; 
});

app.post('/users/login', (req, res) => {
  const {username , password} = req.body ; 

  const user = USERS.find(user => user.username === username && user.password === password) 

  if(!user) 
  {
    res.status(401).json({error : "User not found"}) ; 
  }
  else 
  {
    res.status(200).json({message : "User logged in succesfully!"}) ; 
  }
});

app.get('/users/courses', (req, res) => {
  res.status(200).json({course : COURSES}) ;
});

app.post('/users/courses/:courseId', (req, res) => {
  const courseId = parseInt(req.params.courseId);

  const course = COURSES.find((course) => course.id === courseId);

  if (!course) {
    return res.status(404).json({ error: 'Course not found' });
  }

  res.status(200).json({ message: 'Course purchased successfully', course });
});

app.get('/users/purchasedCourses', (req, res) => {
   res.status(200).json({ purchasedCourses: [] });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
