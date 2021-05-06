const dotenv=require('dotenv');
const  mongoose  = require('mongoose');
const express=require('express');
// var express = require('express')
var cookieParser = require('cookie-parser')
 
var app = express()
app.use(cookieParser())

// const app=express();

dotenv.config({path:'./config.env'});
const DB=process.env.DATABASE;

const PORT=process.env.PORT || 5000;

app.use(express.json());

// const DB="mongodb+srv://shivamsingh:shivam420@cluster0.voyhp.mongodb.net/mernstack?retryWrites=true&w=majority"

// mongoose.connect(DB,
//         {   useNewUrlParser: true ,
//             useUnifiedTopology: true,
//              useCreateIndex:true,
//               useFindAndModify:false}
//     ).then(()=>{
//     console.log("connection successfull")
//     }).catch((err)=>{console.log("connection failed")})

    require('./DB/conn');

// const middleware=(req,res,next)=>{
//     console.log("this is middleware funcion");
//     next();

// }


app.use(require("./Router/Autth"))

// app.get("/",(req,res)=>{
//     res.send(`<h1>home page</h1>`)
    
// })

// app.get("/about",middleware,(req,res)=>{
//     res.send(`<h1>About page</h1>`);
//     console.log("this is about page/")
// })

// app.get("/contact",(req,res)=>{
//     //! cooki checck
//     //  res.cookie("Test","shivam")
//     res.send(`<h1>Contact Us</h1>`)
// })

// app.get("/signin",(req,res)=>{
//     res.send(`<h1>login via signin</h1>`)
// })
// app.get("/signup",(req,res)=>{
//     res.send(`<h1>registration via signup</h1>`)
// })
//!  for heroku deploy

if(process.env.NODE_ENV=="production")
{
app.use(express.static("client/build"))
}



app.listen(PORT,()=>{
    console.log(`listen server successfully at ${PORT}` )
})