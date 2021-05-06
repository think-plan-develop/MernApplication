import React from 'react';

const Contact_Route=(props)=>{


    return(<>
    
    <h1>Thi is route of your page</h1>
    
    <div className="contact_details row col-10 col-sm-10  offset-1 col-md-3 "> 
                    <div className="col-2">
                    {/* <PhoneAndroidIcon color="primary"/> */}
                    {props.icon}
                    </div>
                                 
                    <div className="col-10">
                         <div className="contact_info">
                         <h5>{props.name} </h5>
                         </div>
                        <div className="contact_in">
                          <p> {props.data}</p>
                         </div>
                    </div>     
                </div>
    
    </>)


}
export default Contact_Route;