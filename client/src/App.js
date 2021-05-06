import React,{createContext,useReducer} from 'react'
import Navbar from './Components/Navbar';
// import NavBar1 from './Components/NavBar1';
import {Route,Switch} from 'react-router-dom'
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import ErrorPage from "./Components/ErrorPage";
import Logout from "./Components/Logout";
import {initialState,reducer} from "../src/Reducer/UseReducer"

export const UserContext=createContext();

const Routing=()=>{
  return (
  <Switch>
    <Route  exact path="/">
      <Home/>
      </Route>  
  
      <Route exact  path="/contact">
      <Contact/>
      </Route>  
  
      <Route  exact path="/about">
      <About/>
      </Route> 
  
      <Route exact path="/login" >
      <Login/>
      </Route>    
  
      <Route exact path="/signup">
      <Signup/>
      </Route>  
  
      <Route exact path="/logout">
        <Logout/>
        </Route>
      
      <Route>
        <ErrorPage/>
        </Route>
  </Switch>
  )
}

const App=()=>{

   const[state,dispatch]=useReducer(reducer,initialState)

return(<>
  
<UserContext.Provider value={{state,dispatch}}>
  <Navbar />
  <Routing/>
</UserContext.Provider>

 

  
      </>
    
    )
}

export default App;