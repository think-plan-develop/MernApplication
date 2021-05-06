import React,{ useEffect , useState} from 'react'
import {useHistory} from 'react-router-dom';
import "../Style/About.css"


import SubpartAboutUs from "../Components/SubpartAboutUs"


import shivam_img from "../Images/shivam.png"
import person from "../Images/person.svg";

const About=()=>{

  const[userData,setUserData]=useState([]);

const history=useHistory();

  const callAboutPage = async()=>{
    try{
      const res=await fetch('/about',{
  method:"GET",

  headers:{
  Accept:"application/json",
  "Content-Type":"application/json"

},
credentials:"include"
       
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
      history.push("/login")
    }
    }
    
    useEffect(()=>{
    callAboutPage();
    }
    );
    

    return(<>
    


    <div className="subpart">
    <div className="emp-profile">


 
<form method="GET">
	<div className="row ">
	        <div className="col-md-5 ">
	        <img src={person} alt="shivam"/>
         
	        </div>


     <div className="col-md-6">
	    <div className="profile-head">
	        <h5> {userData.name}</h5>
	        <h6>{userData.work}</h6>
	        <p className="profile-rating mt-3">RANKINGS:<span>1/10</span></p>
        </div>
    </div>
   
    </div>



	
  <div className="row">
  <div className="col-md-4 mt-2">
    {/* <SubpartAboutUs/> */} 
    <p>Web Developer</p>

    </div>
  <div className="col-lg-6 col-md-8">
    <SubpartAboutUs id={userData._id} name={userData.name} email={userData.email} work={userData.work} phone={userData.phone}/>
    </div>
  </div>
 
</form>

</div>
</div>



    
    </>)
}
export default About;