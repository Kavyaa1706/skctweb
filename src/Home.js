import React from 'react';
import{Link} from 'react-router-dom';
import './Home.css';
import img from './skct2.jpeg';
import img1 from './skctlogo2.png';
class Demo extends React.Component{
    render(){
        return (
          <div className='home'>
            <div className='home1'>
              <center><img className='skct' src={img} alt='skct2'></img></center>
              <center><img className='skct1' src={img1} alt='skct3'></img></center>
              <h1 className='code'>TNEA CODE:2722</h1>
            </div>
            <div className='buttons'>
            <button className="rankbtn"><Link to='/Campus1'><i><b>Campus Life</b></i></Link></button>
            <button className="acabtn"><Link to='/Acadamics'><i><b>Acadamics</b></i></Link></button>
            <button className="addbtn"><Link to='/Admission'><i><b>Admission</b></i></Link></button>
            <button className="placebtn"><Link to='/statistics'><i><b>Placement</b></i></Link></button>
            <button className="gallbtn"><Link to='/Gallery'><i><b>Gallery</b></i></Link></button>
            <button className="rshbtn"><Link to='/Fund'><i><b>Research</b></i></Link></button>
            <button className="exambtn"><Link to='/Ceo'><i><b>Examination</b></i></Link></button>
            <button className="abtbtn"><Link to='/Aboutus'><i><b>About Us</b></i></Link></button>
            <button className="ctbtn"><Link to='/ContactUs'><i><b>Contact Us</b></i></Link></button>
            <button className="stlgnbtn"><Link to='/login1'><i><b>Student Login</b></i></Link></button>
            </div>
          </div>
      
        
        );
      }
      }
      
      export default Demo;
