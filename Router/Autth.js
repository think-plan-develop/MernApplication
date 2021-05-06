const { Router } = require('express');
const express=require('express');
const router=express.Router();
const bcrypt = require('bcrypt');  
const jwt=require('jsonwebtoken')

require("../DB/conn")
const User=require('../Model/UserSchema')
const authenticate=require('../Middleware/authenticate')

// router.get("/",(req,res)=>{res.send("<h1>from the router home</h1>")})
// router.get("/contact",(req,res)=>{
//     res.send(`<h1>Contact Us in router</h1>`)
// })


// ! this post method is using promises  another alternative is async await

//     router.post("/register",(req,res)=>{
// //    const data= res.json({mess:req.body});
//    const{name,email,phone,work,password,cpassword}=req.body;
//    if(!name ||!email|| !phone || !work || !password ||!cpassword){
//        return res.status(422).json({error:"please filled the all field"})
//    }
//    if(password!=cpassword){
//        return res.status(422).json({error:"Password should matched confirm password"})
//    }

//     User.findOne({email:email}
//         ).then((userExist)=>{ if(userExist){
//         return res.status(422).json({error:"User Email already exist"})
//     }

//     const user=new User({name,email,phone,work,password,cpassword})
//     // const user=new User({name:name,email:email,phone:phoone,work:work,password:password,cpassword:cpassword})
//     user.save().then(()=>{
//         res.status(201).json({message:"User Regisered successfully"})}
//         ).catch((err)=>res.status(400).json({message:" registeed error"}));
//     }).catch(err=>"error on connection")
// })















// !   this post method is alternative of promises :

router.post("/register", async(req,res)=>{
    const{name,email,phone,work,password,cpassword}=req.body;
        if(!name ||!email|| !phone || !work || !password ||!cpassword)
        {
            return res.status(422).json({error:"please filled the all fields"})
        }
      if(password!=cpassword)
        {
        return res.status(423).json({error:"confirm Password should matched  password"})
        }

    try{
         const userExist=await User.findOne({email:email})
         if(userExist){ 
                           res.status(424).json({error:"User Email already exist"})
                       }
         else{
                 const user=new User({name,email,phone,work,password,cpassword})

        //!  here call bcrypt method code in UserSchema.js no need to write here anything
                    await user.save()
                    res.status(201).json({message:"User Regisered successfully"})
             }
    }
    catch(e){console.log(e)}
})

 
    
 


 //!   SignIn User 

router.post("/signin",async(req,res)=>{
 try{
     
    const{email,password}=req.body;
    if(!email || !password){
      return  res.status(400).json({message:"plz filled all the data"})
    }
        const UserLogin=await User.findOne({email:email});
             console.log(UserLogin)
        if(UserLogin){
            const isMatch=await bcrypt.compare(password,UserLogin.password)
            let token;
            token=await UserLogin.generateAuthToken();
            console.log(token);


            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 2234567890),
                httpOnly: true
            })


              if(isMatch){
                         res.status(200).json({message:"login successfully"})
                    
                            }
                      else{
                          res.status(400).json({message:"signin failed because of password"})
                         }
             }
        else{
             res.status(400).json({message:"signin failed because of email"})
            }
}
        catch(err){console.log(err)}
})

//!  about us

router.get("/about",authenticate,(req,res)=>{
    res.send(req.rootUser);
    console.log("this is about page/")
})
// authenticate is a middleware 

// !  get data for home page and Contact us page
router.get("/getData",authenticate,(req,res)=>{
    console.log("hello get data");
    res.send(req.rootUser);
    });


// ! data for contact

router.post("/contact",authenticate,async(req,res)=>{
    try{
         const {name,email,phone,message}=req.body;
    if(!name||!email||!phone||!message){
    return res.json({error:"plzz filled the contact form"})
}

    const userContact= await User.findOne({
        _id:req.userID});
        
        if(userContact){
        const userMessage=await userContact.addMessage(name,email,phone,message)}

        await userContact.save();
        res.status(201).json({message:"user contact successfuly "})
    }
    
    catch(error){console.log(error)}
    })


//!  Logout

router.get("/logout",(req,res)=>{
   res.clearCookie('jwtoken',{path:"/"})
    console.log("this is Logout page/")
    res.status(200).send('User Logout')
})

   

module.exports=router