import {Link} from "react-router-dom";
import React from "react";
//import Navbar from "./Nav";
import './App.css';

class Welc extends React.Component{
    render(){
  return (
    <div className="app">
      <h2><i>Welcome to</i></h2>
      <h1><i>S K C T</i></h1>
        <button className="homebtn"><Link to='/Home'><i><b>Home-></b></i></Link></button>
       
      </div>
      

  
  );
}
}

export default Welc;