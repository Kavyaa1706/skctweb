import React from "react";
import './Fee.css';
import img from './skct logo.jpg';
import Navbar from "./Nav.js";
import { Link } from "react-router-dom";
class Teaa extends React.Component{
    render(){
        return(
            <div className="gel">
                <div>
                    <img className="gel1" src={img}></img>
                </div>
                <div>
                    <h1 className="gel2"><i>ONLINE FEES PAYMENT PORTAL</i></h1>
                </div>
                <div>
                    
                        <Link>
                            <h1 className="gel3"><i>COLLEGE FEE/<br/>SPECIAL COURSE FEE</i></h1>
                        </Link>
                    
                </div>
                <div>
                    <Link>
                        <h1 className="gel4"><i>HOSTEL FEE</i></h1>
                    </Link>
                </div>
                <div>
                    <Link>
                        <h1 className="gel5"><i>TRANSPORT FEE</i></h1>
                    </Link>
                </div>
                <div className="gel6">
                    <Navbar/>
                </div>
            </div>
        )
    }
}
export default Teaa;
