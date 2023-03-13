import React from "react";
import img from './background.jpeg';
import img1 from './blacky.png';
import img2 from './manlogo.png';
import img3 from './skct1.png';
import './Hallticket.css';
import img4 from './Arrow1.png';
import { Link } from "react-router-dom";
class Hall extends React.Component{
render(){
    return(
        <div className="abb">
            <div>
                <img className="hat" src={img}></img>
            </div>
            <div>
                <img className="hat1" src={img1}></img>
            </div>
            <div>
                <img className="hat3" src={img3}></img>
            </div>
            <div>
                <form className="form10">
                    <div className="fix">
                    <input type="text3" name="register number" placeholder="Register Number"/>
                    </div>
                </form>
            </div>
            <div>
                <Link to='/Student'><img className="gah" src={img4}></img></Link>
            </div>
            <div>
                <img className="hat2" src={img2}></img>
            </div>
            <div>
                <form className="form40">
                    <div className="fix1">
                    <input type="exam1password" placeholder="Enter Password" name="psw" required />
                    </div>
                </form>
            </div>
            <button className="filmbtn"><i><b>Get Hallticket ></b></i></button>
            </div>
    )
}
}
export default Hall;