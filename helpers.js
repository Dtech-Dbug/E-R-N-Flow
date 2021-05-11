function sum( a , b){
    return eval(a+b)
}

// exports.errHandler = (err)=> console.log(error)

// exports.dataHandler = (data)=> console.log(data.toString())


function errHandler(err){
    console.log(err)
}

function dataHandler(data) {
    console.log(data.toString())
}

const createPostValidator = (req, res , next) => {

    // validation for title : refer to the express validator docs too
  req.check('Title' , 'Title is required').notEmpty()
  req.check('Title' , 'Title Must be minimum 4 letters').isLength({
      min : 4,
      max: 100
  })

  //body : validator
  req.check('Body' , 'Body is required').notEmpty()
  req.check('Body' , 'Body Must be minimum 4 letters').isLength({
      min : 4,
      max: 2000
  })

  //checek for errors : all error
  const errors = req.validationErrors()

  //if error = true , show them the first one
  if(errors){
      const allError = errors.map((error)=> error.msg)

      return res.status(400).json({errors: allError}) //returning the res w 400 : bcz there is an error
  }

  


  // to make sure the middleware does not halt the process , use the next() function , wherher there is error or not

  next()
}

module.exports = {
    sum,
    errHandler,
    dataHandler,
    createPostValidator
    
}



//console.log(process)
//modules are private to each imports 

