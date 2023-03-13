import React from 'react';
import img2 from './hall.jpg';
import img3 from './blacky.png';
//import img4 from './Arrow1.png';
import img from './Arrow.png';
import './Seminar.css';
import { Link } from 'react-router-dom';
class  Sem extends React.Component{
    render(){
        return(
            <div className='page3'>
                <center><img className='speech' src={img2} alt="spech"></img></center>
                <div>
                <img className='tumble' src={img3} alt="arr"></img>
                </div>
                <div>
                    <Link to='/Campus1'><img className='imag' src={img}></img></Link>
                </div>
                <p className='one3'><b><i>SEMINAR HALL</i></b></p>
                <p className='two3'><b>Our College firmly believes in providing its <br/>
                students the necessary exposure to national and <br/>international knowledge experts, through regular<br/>
                 seminar and workshops hosted on campus. It is<br/>
                  with this view that a wide choice of modern <br/>
                  conference facilities have been meticulously planned<br/>
                   and incorporated into the SKCT campus. There are three <br/>
                   air-conditioned seminar halls with a capacity to seat<br/>
                    300 each with latest audio-video gadgets for conducting <br/>
                    various events at our campus: • Main Block Seminar Hall • <br/>
                    PG Block Seminar Hall • ES Seminar Hall</b></p>
                
            </div>
            
        )
    }
}
export default Sem;