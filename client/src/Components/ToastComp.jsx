import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ToastComp=()=>{
    const Submit=()=>{
        toast.warn('❌ registration failed ❌');
        toast.success('❌ registration failed ❌');
        toast.info('❌ registration failed ❌');
    }
   

    return(<>
    <div className="bg-blue"> 
             <ToastContainer position = "top-center"
                    autoClose={2500}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick rtl={false}
                    pauseOnFocusLoss draggable pauseOnHover />
                    </div>
    <button onClick={Submit}>SubmitSubmit</button>
    </>)

}
export default ToastComp;