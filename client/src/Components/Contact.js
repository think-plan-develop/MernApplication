import React,{useEffect,useState} from 'react'
import "../Components/About"
import "../Style/Contact.css"
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailIcon from '@material-ui/icons/Mail';
import LocationCityRoundedIcon from '@material-ui/icons/LocationCityRounded';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const Contact=()=>{

    const[userData,setUserData]=useState({name:"",email:"",phone:"",message:""});


    const userContact = async()=>{
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
      }
      }
      
      useEffect(()=>{
    userContact();
      },[]);
      
  
      const inputHandle=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setUserData({...userData,[name]:value})
        console.log(userData);

      }

      // ! send the data to backend

 const contactForm=async(e)=>{
        e.preventDefault();

        const {name,email,phone,message}=userData;

  const  res=await fetch('/contact',{method:"POST",
  headers:{
  "Content-Type":"application/json"
  },  
  body:JSON.stringify({	name,email,phone,message
  })  
  })

  const data=await res.json();
  if(!data){
  console.log("message not send") 
  }
  else{
    alert("message sent")
    setUserData({...userData,message:""})
  
 

  }
      }




    return(<>
    
   

    <div className="contact_page">
        <div className="container-fluid">


            <div className="box row">


                <div className="contact_details row col-10 col-sm-10  offset-1 col-md-3 "> 
                    <div className="col-2">
                    <PhoneAndroidIcon color="primary"/>
                    </div>
                                 
                    <div className="col-10">
                         <div className="contact_info">
                         <h5> Phone number</h5>
                         </div>
                        <div className="contact_in">
                          <p>  {userData.phone} </p>
                         </div>
                    </div>     
                </div>
       
           
                <div className="contact_details row  col-10 col-sm-10  offset-1 col-md-3 "> 
                    <div className="col-2">
                    <MailIcon color="primary"/>
                    </div>      
                    <div className="col-10">
                         <div className="contact_info">
                             <h5> Email</h5>
                         </div>
                        <div className="contact_in">
                           <p> {userData.email} </p>
                         </div>
                    </div>     
                </div>
            

                <div className="contact_details row col-10 col-md-3 col-sm-10  offset-1 "> 
                    <div className="col-2">
                   < LocationCityRoundedIcon color="primary"/>
                    </div>            
                    <div className="col-10">
                         <div className="contact_info">
                        <h5>Profession</h5>
                         </div>
                        <div className="contact_in">
                         <p> {userData.work} </p>
                         </div>
                    </div>     
                </div>
            </div>





            <div className="out">
            <div className="in"> 
           

            <form method="POST">
                <div className="box row">

                {/* <TextField
          label="Size"
          id="outlined-size-normal"
          defaultValue="Normal"
          variant="outlined"
        />
         */}
            
                 <div className=" row col-md-3 col-sm-10 col-10  offset-1 mt-3 mt-md-5 ml-md-5">                   
                    <TextField id="outlined-basic" onChange={inputHandle}
                     name="name" value={userData.name}  label="Name" defaultValue="Name" variant="outlined" />             
                    </div>
       
            <div className="row col-md-3 col-sm-10 col-10 offset-1 mt-3 mt-md-5">           
                <TextField id="outlined-basic" onChange={inputHandle}
                 name="email" value={userData.email} label="Email"  defaultValue="Email" variant="outlined" /> 
            </div>

                <div className="row col-md-3 col-sm-10  col-10 offset-1  mt-2 mt-md-5"> 
                <TextField id="outlined-basic"  onChange={inputHandle}
                 name="phone" value={userData.phone} label="Phone" defaultValue="Phone" variant="outlined" />        
                </div>
                
                <div className="d-flex justify-content-center mt-5">
                    <textarea className="" placeholder="Message" onChange={inputHandle}
                     name="message" value={userData.message}></textarea>
                 </div>
                
              
            <Button variant="contained" color="primary" name="message" onClick={contactForm}
            id="message" className="mt-3 message mb-2 ml-5">Submit</Button>

</div>
</form>

</div>
        </div>
    </div>
    </div>   
    </>)
}
export default Contact;