import React from "react";
import './ContactUs.css';
import pic from './Background1.png';
import pic1 from './rectangle.png';
import pic2 from './button.png';
import { Link } from "react-router-dom";

class Contact extends React.Component{
    render(){
        return(
            <div className='phone'>
            <center><img className="bg1" src={pic} alt="picture1" width={1000}></img></center>
            <div className="s1">
            <img className="shape" src={pic1} alt="pic"></img>
            </div>
            <div className="s2">
            <Link to='/Home'><img className="Arrow" src={pic2} alt="ppp"></img></Link>
            </div>
            <div className="Connect">
                <div className="s3">
                <p className="cntct"><b><t><i>COLLEGE-SRI KRISHNA COLLEGE OF TECHNOLOGY:</i></t></b></p>
                </div>
                <p className="Add"><b>ADDRESS:</b></p>
                <p className="Skc">Sri Krishna College of Technology, Kovaipudur, Coimbatore - 641 042.</p>
                <p className="Skc1"><b>CONTACT US:</b></p>
                <p className="Skc2">Phone Number : 0422-2984567-68</p>
                <p className="Skc3"><b>E-CONTACT:</b></p>
                <p className="Skc4">Email : info@skct.edu.in</p>
                <div className="s4">
                <p className="admsn"><b><t><i>ADMINISTRATIVE TRUST OFFICE:</i></t></b></p>
                </div>
                <div>
                    <p className="Skc5"><b>ADDRESS:</b></p>
                    <p className="Skc6">VLB & Sri Krishna Trust ,Kovaipudur, Coimbatore - 641 042.</p>
                    <p className="Skc7"><b>CONTACT:</b></p>
                    <p className="Skc8">Phone Number : 0422-2604545-49</p>
                    <p className="Skc9"><b>E-CONTACT:</b></p>
                    <p className="Skc10">Email : info@srikrishna.ac.in, info@vlbkrishna.edu.in</p>
                </div>
            </div>
            </div>
        )
    }
}
export default Contact;