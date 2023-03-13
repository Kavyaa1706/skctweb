import React from 'react';
import img from './skct logo.jpg';
import './Credit.css';
import Navbar from './Nav';
import img1 from './credit1.png';
class Cre extends React.Component{
    render(){
    return(
    
            <div className='dem'><center><img className='logo1' src={img} alt='logo'></img></center>
            <div><center><img className='credit' src={img1} alt='credit'></img></center></div>
            <div className='dem30'>
                <Navbar/>
            </div>
            </div>

    )
    }
}
export default Cre;
