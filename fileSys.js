const fs = require('fs'); //fs is core module. it has many methods

const { dataHandler , errHandler} = require('./helpers')


const fileName = 'target.txt'

// const errHandler = (err)=> console.log(error)

// const dataHandler = (data)=> console.log(data.toString())


fs.readFile(fileName , (err ,data) =>{
   // if(err) errHandler(err);

    dataHandler(data);

    
})

/*

watch method / the watch method takes two arg. : callback functionand file name.

fs.watch(fileName ,
    ()=> {
        console.log('changing')
    }) 

*/

//readFile / async programming : true essece of programming : follows non blockinf functionality

// fs.readFile(fileName , 
//     (err , data)=> {
//         if(err){
//             console.log('ooposie :' + err)
//         }
        
    
//       console.log(data.toString())
//     }
//  )


// sync programming: easy to read but less eficient compared to async , below is an example

// const data = fs.readFileSync(fileName) ; // using the readFileSync module , which is a synchrnous module ,in contrast to the readfile method

// console.log(data.toString())
// console.log('see what compiles first') 

