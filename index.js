// /* 
// steps 
// -> npm init -y
// -> make index.js
// -> npm install express
// -> go on expressjs site and bring basic boiler code 
// -> npm install body-parser
// */


const express = require('express')
// added this after (npm install body-parser) and add (app.use(bodyParser.json());)
let bodyParser = require('body-parser') 
const app = express()
const port = 3000




// function middleWare1(req, res, next){ // request, response, next step
//     console.log("from inside middleware " + req.headers.counter);
//     // res.send("Error in middleWare"); // cannot send res if next is active, will have to put some condition
//     next();
// }

// app.use(middleWare1); // this initializes our use of middleWare before the main function is called
app.use(bodyParser.json()); // added a mew middleWare to extract the body when we do console.log(req.body)


function handleFirstRequest(req, res){
    // let counter = req.query.counter; // this is via query parameters

    // console.log(req.headers);
    // // in post man header section we clear url till handeSum and key -> counter and value -> 4
    // let counter = req.headers.counter; // this is via headers

    console.log(req.body);
    // for this in body in postman click on raw -> JSON
    let counter = req.body.counter; // this is via body which we will use most of the time

    let calculatedSum = calculateSum(counter);
    // let calculatedMul = calculateMul(counter);

    // let answerObject = {
    //     sum: calculatedSum, 
    //     multiply: calculatedMul
    // };

    // res.send(answerObject); // returning the data JSON object so that it's easy to parse later if needed

    var ans = "The sum is " + calculatedSum; 
    res.send(ans); // here the ans sent is returning a SIMPLE TEXT
}

// function givePage(req, res){
//     // All WAYS works
// // if you want to use simple double quotes then the all the code should be present in a single line . 
//    // res.sendFile(__dirname + "/index.html");
//     // res.send(`<head>
//     //             <title>
//     //                 Hello from page
//     //             </title>
//     //         </head>
//     //         <body>
//     //             <b>kjbljiblijbkjnknjrgethrhrhrh</b>
//     //         </body>`)
//     //   res.send("<head> <title> Hello from page </title> </head>  <body> <b> hi! </b>  </body>") ; 
// }
 // app.get('/', givePage); // sending HTML

// app.get('/handleSum', handleFirstRequest); // this can be accessed by the browser
//app.post('/handleSum', handleFirstRequest); // this we check in postman 


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})




function calculateSum(num){
    let sum = 0;
    for(let i = 1; i <= num; i++){
        sum += i;
    }
    return sum;
}

function calculateMul(num){
    let answer = 1;
    for(let i = 1; i <= num; i++){
        answer *= i;
    }
    return answer;
}



// req.params - Route Parameters:
// req.params is used to extract values from the named route parameters in the URL. Route parameters are part of the URL path and are defined in the route pattern. For example, in the route /users/:id, id is a route parameter.
// Example URL: /users/123


// req.query - Query Parameters:
// req.query is used to extract values from the query string of the URL. Query parameters are usually appended to the URL after a ? and separated by &. For example, in the URL /search?q=query&sort=asc, q and sort are query parameters.
// Example URL: /search?q=query&sort=asc
