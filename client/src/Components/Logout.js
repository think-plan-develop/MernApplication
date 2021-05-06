import React,{useEffect, useContext} from "react";
import {useHistory} from "react-router-dom";
import {UserContext} from "../App";

const Logout=()=>{
     
    const{state,dispatch}=useContext(UserContext)
        const history=useHistory();
// 

useEffect(()=>{
    if (window.confirm(" Are You Sure to Logout ")) {
     
      
    fetch('/logout',{
    
      method:"GET",
    
      headers:{
      Accept:"application/json",
      "Content-Type":"application/json"
    
    },
    credentials:"include"
     
    }).then((res)=>{

        dispatch({type:"USER",payload:false})

        history.push('/login',{replace:true})
        if(res.status!==200)
        {
            const error=new Error(res.error);
            throw error;
        }

      
    }).catch((err)=>{
        console.log(err);
    })

}
 else {
    history.push('/')
}
}, []) 


    return(<>
    {/* <h1>logout</h1> */}
    
    </>)
}
export  default Logout;