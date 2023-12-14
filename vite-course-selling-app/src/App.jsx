import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Signup' ; 
import Signin from './Signin';
import Appbar from './Appbar' ; 
import AddCourse from './AddCourse';

// This file shows how you can do routing in React.
// Try going to /login, /register, /about, /courses on the website and see how the html changes
// based on the route.
// You can also try going to /random and see what happens (a route that doesnt exist)
function App() {
    return (
        <div style = {{width : "100vw" , height : "100vh" , backgroundColor : "#eeeeee"}}>
        <Appbar/>
        <Router>
            <Routes>
                <Route path="/signin" element={<Signin/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/addcourse" element = {<AddCourse/>} />
            </Routes>
        </Router>
        </div>
    );
}

export default App;