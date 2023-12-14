import { Button, Card, TextField } from "@mui/material";
import { useState } from "react";

function AddCourse() {

        const [title , setTitle] = useState() ; 
        const [description , setDiscription] = useState() ; 

        return <div style = {{display : "flex" , justifyContent : "center"}}>  
        <Card variant = {"outlined"} style = {{width : 400 , padding : 0}} >  
            <TextField 
                onChange={(e) => {
                   setTitle ( e.target.value) ; 
                }}
                fullWidth = {true} 
                label = "title" 
                variant = "outlined" 
            />

            <TextField 
                onChange={(e) => {
                    setDiscription(e.target.value) ; 
                }}
                fullWidth = {true} 
                label = "Description" 
                variant = "outlined" 
            />

            <Button 
                size = {"large"} 
                variant = "contained" 
                onClick={() => {
                    function callback2(data) 
                    {
                        localStorage.setItem("token" , data.token) ; 
                    }
                    function callback1(res) 
                    {
                        res.json().then(callback2) ; 
                    }
                    fetch("http://localhost:3000/admin/courses" ,{
                        method : POST , 
                        body : JSON.stringify({
                            title : title , 
                            description : description , 
                            imageLink : " " , 
                            published : true
                        }),
                        headers : {
                            "Content-type" : "application/json" , 
                            "Authorization" : "Bearer" + localStorage.getItem("token")  
                        }
                    }) 
                    .then(callback1)
                }}
                > Add Course</Button>
        </Card>      
        </div> 
}

export default AddCourse ; 