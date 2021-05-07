import React, { useState,useContext } from 'react'

import {NavLink} from 'react-router-dom'
import {useHistory} from 'react-router-dom';


import EmailIcon from '@material-ui/icons/Email'
import LockIcon from '@material-ui/icons/Lock'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LogIn from '../Images/LogIn.svg'

import {UserContext} from "../App";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login=()=>{

    const{ state,dispatch}=useContext(UserContext)

const history=useHistory();
    const[email,setEmail]=useState([]);
    const[password,setPassword]=useState([]);

    const mail=(e)=>{
        setEmail(e.target.value);
        console.log(e.target.value);
    }

    const mailPassword=(e)=>{
        setPassword(e.target.value);
        console.log(e.target.value);
    }

    const loginUser= async(e)=>{
        e.preventDefault();

        const res=await fetch("/signin",
        {
        method:'POST',
        headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        email,
        password

    })

        })

        const data=res.json();
        if(res.status===400 || !data){
            toast.warn("invalid credential");
        }
        else{
            dispatch({type:"USER",payload:true})
           toast.warn("login successfully")
            history.push("/")

        }
    }





    return(<>
    
    
   
    
    <section className="signin">
            <div className="container mt-0  mt-sm-4">
           
                <div className="signin-content row mt-4">
                    <h2 className="form-title mt-3">Sign in</h2>
                    {/* <div className="signin-form col-5"> */}
                    
                    

                    <div className="signin-form col-7 col-md-6 ">
                    <img src={LogIn} alt="Login_image"/>
                       <NavLink to="/signup"  className=" ml-md-1 ml-sm-1 ml-xs-1">Create an Account</NavLink>
                    </div>
                
                    
                        
                        
                        
                        <div className="col-10  col-md-6  login  offset-3 offset-md-0">
                            <form className="Login-from" method="POST" id="Login-from">


                         <div className="form-group row flex-end">                           
                            <div className="col-1 align-self-end">
                                               <EmailIcon/>
                             </div>
                                    <div className="col-9">
                                             <TextField onChange={mail} value={email} type="text" name="email" id="email" label="Email" autoComplete="off" 
                                             placeholder="Your Email"/>
                                    </div>
                         </div>



                                <div  className="form-group row flex-end mt-2">
                                     <div className="col-1 align-self-end">                                  
                                        <LockIcon/>  
                                     </div>
                                    <div className="col-9">
                                         <TextField onChange={mailPassword}  value={password} type="password" name="password" id="password"  autoComplete="off" 
                                            placeholder="Your password" label="Password"/>
                                    </div>
                                </div>
                                <div className="signup-image col-5">
                                < Button onClick={loginUser} variant="contained" color="primary"  name="signup" id="signin" className=" mt-4 mb-5">  Submit</Button>   
                                         
                                           

                                            </div>

    </form>
    </div>
                        
                     
                 
             </div>
             </div>
    </section>

    <ToastContainer position = "top-center"
                    autoClose={2500}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick rtl={false}
                    pauseOnFocusLoss draggable pauseOnHover />
    </>)
}
export default Login;