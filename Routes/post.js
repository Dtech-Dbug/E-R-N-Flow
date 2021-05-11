const express = require('express')
const { getPostController , createPost } = require('../Controllers/postController') 
const { createPostValidator } = require('../helpers')

//using express router to handle routing 
// we required express so we can use express router
//express router = route handling 

const router = express.Router()

//now this entitre Routes/post.js can be used a middleware for our application

router.get('/' ,getPostController ) //anything we get here , we pass it to the controller who will check the request and hadnle the response

router.post('/post', createPostValidator ,createPost )  // creating a new route for new this.post. All we do here is take the info from FE and post in the DB , backend
// createPostValidator : validation function ,acting as a middleware , between the request and response



module.exports= router

console.log(process)