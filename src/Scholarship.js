import React from "react";
import './Scholarship.css';
import pic16 from './skct logo.jpg';
import Navbar from './Nav';

class Ship extends React.Component{
    render(){
        return(
            <div className="s25">
            <div>
                <img className="pc20" src={pic16}></img>
            </div>
            <div className="s27">
                <p className="pc21">.</p>
                <p className="pc21a">CENTRAL SECTOR SCHOLARSHIP SCHEME</p>
                <p className="pc22">.</p>
                <p className="pc22a">BC/MBC SCHOLARSHIP</p>
                <p className="pc23">.</p>
                <p className="pc23a">AICTE PRAGATI SCHOLARSHIP</p>
                <p className="pc24">.</p>
                <p className="pc24a">AICTE – SWANATH SCHOLARSHIP SCHEME </p>
                <p className="pc25">.</p>
                <p className="pc25a">SCHEME OF ‘MERIT CUM MEANS BASED SCHOLARSHIP</p>
                <p className="pc26">.</p>
                <p className="pc26a">FINANCIAL ASSISTANCE FOR EDUCATION TO THE WARDS OF BEEDI/CINE/IOMC/LSDM WORKERS</p>
                <p className="pc27">.</p>
                <p className="pc27a">CENTRAL SECTOR SCHEME OF SCHOLARSHIP FOR COLLEGE  STUDENTS</p>
                <p className="pc28">.</p>
                <p className="pc28a">FINANCIAL ASSISTANCE FOR EDUCATION TO THE WARDS OF BEEDI/CINE/IOMC/LSDM WORKERS</p>
                <p className="pc29">.</p>
                <p className="pc29a">AICTE – SAKSHAM SCHOLARSHIP SCHEME FOR SPECIALLY-ABLED STUDENT</p>
                <p className="pc30">.</p>
                <p className="pc30a">PRIME MINISTER’S SCHOLARSHIP SCHEME FOR THE WARDS OF CENTRAL ARMED POLICE FORCES,<br/>
                                    ASSAM RIFLES & STATES/UTS POLICE PERSONNEL</p>
            </div>
            <div className="bar5">
                <Navbar></Navbar>
            </div>
            </div>
)
    }
}
export default Ship;