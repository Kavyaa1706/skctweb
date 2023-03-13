import React from 'react';
import img2 from './auditorium.jpeg';
import img3 from './blacky.png';
import img4 from './Arrow.png';
import { Link } from 'react-router-dom';
import './Auditorium.css';
class  Audi extends React.Component{
    render(){
        return(
            <div className='page10'>
                <img className='vankat' src={img2} alt="vank"></img>
                <div className='arrow5'>
                <img className='ora4' src={img3} alt="arr"></img>
                </div>
                <div>
                <Link to ='/Campus1'><img className='ora7' src={img4} alt="black"></img></Link>
                </div>
               
                <p id='one5'><b><i>AUDITORIUM</i></b></p>
                <p id='two5'><b>Vankataram Hall is a most modern air-conditioned <br/>
                auditorium with a capacity to seat 3500 students.<br/>
                 The hall mark of this structure is its interior design <br/>
                 and an excellent stage to showcase the talents of<br/>
                the students. This hall is equipped with Wi-fi facility <br/>
                and a spectacular stage along with green rooms and <br/>
                perfect amount of lighting.</b></p>
                
            </div>
            
        )
    }
}
export default Audi;