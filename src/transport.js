import React from 'react';
import img2 from './transport.jpg';
import img3 from './blacky.png';
import img4 from './Arrow.png';
import { Link } from 'react-router-dom';

import './transport.css';
class  Trans extends React.Component{
    render(){
        return(
            <div className='page7'>
                <center><img className='Trans' src={img2} alt="Trans"></img></center>
                <div className='arrow5'>
                <img className='image40' src={img3} alt="arr"></img>
                </div>
                <div className='shape6'>
                <Link to='/Campus1'><img className='image60' src={img4} alt="black"></img></Link>
                </div>
               
                <p id='one6'><b><i>TRANSPORT</i></b></p>
                <p id='two6'><b>SKCT provides college bus service from various<br/>
                 prominent locations in and around Coimbatore.<br/>
                  The 21 buses with a seating capacity of 60 each,<br/>
                   ply in and around Coimbatore such as Pollachi,<br/>
                    Mettupalayam, Avinashi, Tirupur, Annur, etc.</b></p>
                
            </div>
            
        )
    }
}
export default Trans;