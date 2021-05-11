//const post = require('../Model/post')
const Post = require('../Model/post')

function getPostController(req , res){
    // res.json({
    //     Name:[
    //         {firstname : 'Dwaipayan'},
    //         {lastname : 'Chakroborty'},
    //         {work : 'FullStack Developer'},
    //         {currentStack : 'MERN' }
    //     ]
    // })

    //now showing the post we created
    //since we have the POst model : collection of post , it is easier to get and show the Posts in the browser

    const posts = Post.find()// this method shows all the posts //to specificaly get choice of fileds . chain another method , that is select
    .select("body")
    .then ((posts)=>{
        res.json({
            posts
        })
    })
    .catch(err => console.log(err))
}

const createPost = (req , res) => {
    // the way we create a new post , is based on the info sent to us from the FrontEND. tHE INFORMATION FROM fe , SENT TO US IS VIA REQUEST(req)

    const newPost = new Post(req.body)
    console.log('Creating Post: ' , req.body)
     //res.json(req.body)
     //res.end('posted. wanna see?')
     // saving the body in the db

    //  newPost.save((err , result)=> {
    //      // in nODe , make sure to alwats handle errors
    //      if (err) {
    //          return res.status(400).json({
    //              error : err// if anything goes wrong , we want this JSOn as response
    //          })
    //         }
    //          else{
    //             res.status(200).json({
    //                 post: result
                   
    //                 //on success , we give the JSON response with the actual post that we created
    //             })
    //             console.log(`Saved to Database`)
             
    //      }
    //  })

    newPost.save()
    .then(result => {
        res.status(200).json({
            post : result
        })
    })
    // refactor the code : we set the stauts code 200 for success and pass the json body => send the JSON response as the post itself which is the result
}

//we can not view the req.body , the console shows undefined
// this is bcz express by default does not parse the request body/json objects
//so , there is a very popular package : body parser
 module.exports= {
    getPostController,
    createPost
 }