import React from 'react';
import img2 from './sports.jpeg';
import img3 from './blacky.png';
import img4 from './Arrow.png';
import { Link } from 'react-router-dom';
import './sports.css';
class  Spor extends React.Component{
    render(){
        return(
            <div className='page8'>
                <img className='Sport' src={img2} alt="Sporr"></img>
                <div className='arrow6'>
                <img className='imagee' src={img3} alt="arr"></img>
                </div>
                <div className='shape7'>
                <Link to='/Campus1'><img className='imagei' src={img4} alt="black"></img></Link>
                </div>
               
                <p id='one7'><b><i>SPORTS</i></b></p>
                <p id='two7'><b>SKCT provides various opportunities<br/>
                 to students to enhance their skill<br/>
                  in sports.Various games such as <br/>
                  football,volleyball, basketball,handball,<br/>
                  etc are provided to students.</b></p>
                
            </div>
            
        )
    }
}
export default Spor;
