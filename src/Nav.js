import React from"react";
import { Link } from "react-router-dom";
import img from './skct logo 2.png';
import './Nav.css';
import Insta from '@material-ui/icons/Instagram';
import Face from '@material-ui/icons/Facebook';
import Linked from '@material-ui/icons/LinkedIn';
import Twi from '@material-ui/icons/Twitter';
import You from '@material-ui/icons/YouTube';
//import { Link } from "@material-ui/core";
//import { Typography } from "@material-ui/core";
//import Grid from '@mui/material/Grid';

class Navbar extends React.Component{
    render(){
        return(
            <div>
                <div className="hh1">
                   <nav>
                   <button className="hbtn"><Link to='/Home'><i><b><b>Home</b></b></i></Link></button>
                   <button className="abbtn"><Link to='/AboutUs'><i><b><b>AboutUs</b></b></i></Link></button>
                   <button className="ctnbtn"><Link to='/ContactUs'><i><b><b>ContactUs</b></b></i></Link></button>
                   </nav>
                </div>
                    
                        <div className="dee">
                            <h1 className="dee1"><i>Follow Us on-</i></h1>
                        </div>
                        <div className="goo">
                            <Insta fontSize="large">
                            </Insta>
                        </div>
                        <div className="goo1">
                            <Face fontSize="large"></Face>
                        </div>
                        <div className="goo2">
                            <Linked fontSize="large" ></Linked>
                        </div>
                        <div className="goo3">
                            <Twi fontSize="large" ></Twi>
                        </div>
                        <div className="goo4">
                            
                                <You fontSize="large"></You>
                            
                        </div>
                    
                <div>
                    <img className="kae" src={img} alt='skct8'></img>
                </div>
            </div>
        )
    }
}
export default Navbar;