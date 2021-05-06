// import jwt from "jsonwebtoken";
// import User from "../models/user";
var express = require('express')
var cookieParser = require('cookie-parser')
 
var app = express()
app.use(cookieParser());

const jwt = require("jsonwebtoken");
const User = require("../Model/UserSchema");

const authenticate = async(req, res, next) => {
    // console.log(req.cookies.jwtoken);
    try {
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        const rootUser = await User.findOne({ _id: verifyToken._id, 'tokens.token': token });

        if (!rootUser) {
            throw new Error("User cannot find!!");
        }

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
        next();

    } catch(error) {
        res.status(401).send('Unauthorized: No token provided');
        console.log(error);
    }
};

module.exports = authenticate;
