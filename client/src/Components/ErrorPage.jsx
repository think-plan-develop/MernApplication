import React from 'react';
import "../Style/ErrorPage.css"
import {NavLink} from "react-router-dom";
import Button from '@material-ui/core/Button';
import e from '../Images/404.svg'

const ErrorPage=()=>{

    return(<>
    
    <div className="error" >

    {/* <div className="one"  style={{  backgroundImage:`url(${e})`, backgroundSize:"58%",filter: "brightness(50%)",
      backgroundRepeat: "no-repeat"}}>
     </div> */}

       <div className="one">

        <h1 className="text-primary text-center" >We Are Sorry, Page Not Found!</h1>
        <p clss text-center>The page you are looking for might have been removed , 
            had its name changed or is temporarily unavailable.</p>
           

            
          
           <div className="errorsub2"> 
        <NavLink className="nava" to="/"><Button variant="contained" color="primary" >Home Page</Button></NavLink>
     
        </div> 

        <div  className="two"  style={{  backgroundImage:`url(${e})`, backgroundPosition: "center", 
        backgroundSize:"40%",opacity: 0.5,filter: "brightness(100%)",
      backgroundRepeat: "no-repeat"}}>
         </div>

         </div>
         </div>
    </>)

}
export default ErrorPage;