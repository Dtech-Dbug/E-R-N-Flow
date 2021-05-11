const mongoose = require('mongoose')


const postSchema = new mongoose.Schema({

    // using express-validator  , we can remove the minLemght/maslenght from this model , as express takes an object for validation schema too
    Title : {
        type : String,
        required : 'Title is required',
        minlength : 4,
        maxlength : 100

    },

    Body : {
        type : String,
        required : 'Title is required',
        minlength : 4,
        maxlength : 2000,

    }
})

module.exports = mongoose.model('Post' , postSchema) 

// we create the schema by the model method :mongoose.method