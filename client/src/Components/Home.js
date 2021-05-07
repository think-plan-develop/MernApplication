import React, { useState,useEffect } from 'react';
import "../App.css"
import "../Style/Home.css"
import mern from "../Images/MERN-Stack.png"


// import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';


const Home=()=>{

    const[userData,setUserData]=useState({})

    const callHomePage = async()=>{
        try{
          const res=await fetch('/getData',{
      method:"GET",
    
      headers:{
     
      "Content-Type":"application/json"
    
    },
   
           
        }
        ) 
      
        const data=await res.json();
    console.log(data);
    setUserData(data);
    
    if((await res).status!==200){
      const error=new Error(res.error);
      throw error;
    }
    
      
      }
    
           catch(err){
          console.log(err)
        //   history.push("/login")
        }
        }
        
        useEffect(()=>{
        callHomePage();
        },[]);
        
    






    return(<>
    {/* <Contact_Route name="phone number" data="996767" icon= {<PhoneAndroidIcon color="primary"/>}/>
        */}

<div className="home-page">
	<div className="home-div">
    <h2 style={{textTransform:"capitalize",textAlign:"center" ,marginBottom:"30px"}}>Hi, <span style={{color:"orange",fontWeight:"bolder"}} > {userData.name}</span></h2>
    <div className="align-items-center f ">
         <img src={mern} className="Mern" alt="MERN"/>
         
     </div>
   
    
</div>
</div>

    


    
    </>)
}
export default Home;