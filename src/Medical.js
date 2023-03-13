import React from 'react';
import img2 from './medical.png';
import img3 from './blacky.png';
import img4 from './Arrow.png';
import { Link } from 'react-router-dom';

import './Medical.css';
class  Med extends React.Component{
    render(){
        return(
            <div className='page2'>
                <img className='doctor' src={img2} alt="med"></img>
                <div className='shape1'>
                <img className='image3' src={img3} alt="black"></img>
                </div>
                <div className='arrow1'>
                <Link to='/Campus1'><img className='image25' src={img4} alt="arr"></img></Link>
                </div>
                <p id='one1'><b><i>MEDICAL CENTRE</i></b></p>
                <p id='two2'><b>A well-equipped Medical Centre is available in the <br/>
                campus. Dr R Jayashree will take care of the students <br/>
                round the clock. In case of emergency, ambulance <br/>
                service is readily available for 24 hours to access <br/>
                the medical facilities in the hospitals located nearby</b></p>
                
            </div>
            
        )
    }
}
export default Med;