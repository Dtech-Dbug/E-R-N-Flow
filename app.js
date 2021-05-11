const Express = require('express')
const app = Express() // the entire express package is stored in the constatnt App
const morgan = require("morgan")
const mongoose = require('mongoose')
const bodyParser = require("body-parser") // to parse the JSON request body 
const expressValidator = require('express-validator') // for better error handling : giving freindly error messages
//to load the environmental variables from .env file , install a package 
//npm i dotenv
const dotenv = require('dotenv')
// to invoke the dotenv we need to use the config method
dotenv.config()

//db
mongoose.connect(process.env.MONGO_URI , { useNewUrlParser: true } , { useUnifiedTopology: true } )
.then(()=> console.log('DB CONNECTED'))

mongoose.connection.on('error' , err => {
  console.log(`B CONNECTION FAILED : ${err.message}`)

})

//bting in routes
const postRoutes = require('./Routes/post')



//Middleware
app.use(morgan('dev'))


app.use(bodyParser.json());
//while we use controller to access request and handle response , we use app as a middleware and not perfrom app.get
app.use(expressValidator()) //used as a middleware : for better errorhandling : error messages
app.use('/' ,postRoutes )



const port= process.env.PORT || 8000;
app.listen(port , ()=> console.log(`Running on port, : ${port}`))

console.log(process)











/* Middleware: muOwnMiddleWare

const myOwnMiddleware = (req , res , next)=> {
  //if we do not pass any parameter . Node js ia  contstant process , it will not let it pass to the next event loop; upon refresh the window will lag and not load.
  //to fix that , we need to use the NEXT function , ehich passes the middleware after sucession
  //middleware is the tissue bw user , data 

  console.log('my middleware applied')
  next()
}
*/



/*
Understanding nodejs basics : import and export modules/logical sepearation

var helper = require('./helpers') //traditional way of importing a module by require method
var {sum} = require('./helpers') // object destructing method to extract just the required function from the module , export object
//console.log(helper)


const test = sum(8 , 8); // the syntax bacme easy due to destructured import
var test1 = helper.sum(9 , 9) // using the sum method of the helper , which stores the module
console.log('See both of it works =   ' + test + ' ' +  test1)

*/

/* 
---- Creating a server in traditional way ----

var http = require('http') // require a nodejs core module


// the createServer method takes a function as as arguments. The function takes two arguments => request and response. Based on request , we anyalyse the response,generally
const server = http.createServer((req , res)=>{
  res.end('hello learning nodejs : creating own server , and using nodemon package to watch changes')

})

//usuallly to reflect any changes made in the server , the server has to be shut and restrated again. To eliminate this hassle , nodemon package is used by devs: it automtically detects changes and restarts the server .
// bit of a setup before we can run the nodemon npm cmd : we need to create a package.json file

server.listen(3000) // listening to a port
*/

/*

Express : starting a server

// get:  method to listen the request coming from the browser to the server
// the get method takes in two parameters , the first one is the path/Route.
// second parameter : callback function : which takes in two arguments => (req , res)

// app.get('/' , (req, res)=>{
//   res.send('Hey Getting started with Express??')
//   // this is the response we would like to serve , whenever people request the specified URL

// })

*/