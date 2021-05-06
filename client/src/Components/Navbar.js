import React,{useContext} from 'react'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/js/src/collapse.js";
// import { NavLink } from "react-router-dom";
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import {UserContext} from "../App";

const Navbar=()=>{
  const {state,dispatch}=useContext(UserContext)
  const RenderMenu=()=>{
   
    if(state){
    return(<>

                <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" exact to="/">Home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" exact to="/contact">Contact</NavLink>
        </li>
        
  <li className="nav-item">
   <NavLink activeClassName="menu_active" className="nav-link" exact to="/about">About</NavLink>
 </li>
 
 <li className="nav-item">
   <NavLink activeClassName="menu_active" className="nav-link" exact to="/logout">Logout</NavLink>
 </li>



    
    </>)
    }

    else
    {
      return(<>
              <li className="nav-item">
          <NavLink activeClassName="menu_active"  className="nav-link" exact to="/">Home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink activeClassName="menu_active"  className="nav-link" exact to="/contact">Contact</NavLink>
        </li>
        
  <li className="nav-item">
   <NavLink activeClassName="menu_active"  className="nav-link" exact to="/about">About</NavLink>
 </li>

 <li className="nav-item">
   <NavLink activeClassName="menu_active"  className="nav-link" exact to="/signup">Signup</NavLink>
 </li>

 <li className="nav-item">
   <NavLink activeClassName="menu_active"  className="nav-link" exact to="/login">Login</NavLink>
 </li>
 
 

    
    </>)
    }
    }
    
    

    return(<> 
  

  <div className="container-fluid">
  <div className="row">
  <div className="col-12 max-auto">
  
  
  <nav className="navbar navbar-expand-lg navbar-light bg-light">


              <div className="body">
                <div >
    
           <NavLink activeClassName="menu_active" className="navbar-brand" exact to="/author"> ShivamTech</NavLink>
    
              </div>
    
               <div className="loader">
                      <span></span>
                       <span></span>
                           <span></span>
                             <span></span>
                       </div>
                       </div>
    {/* <NavLink activeClassName="menu_active" className="navbar-brand" exact to="/author"> ShivamTech</NavLink> */}
    
    <button className="navbar-toggler" type="button" data-toggle="collapse" 
    data-target="#navbarSupportedContent" aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">



      <ul className="navbar-nav ml-auto mb-4 mb-lg-0">
       <RenderMenu/>
    
       
      </ul>
     
     
     
     
    </div>
  
</nav>
</div>
</div>
</div>

    
   </> )
}
export default Navbar;