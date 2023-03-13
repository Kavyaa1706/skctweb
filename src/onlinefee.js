import React from 'react';
    import img from './scene.png';
import img1 from './blacky.png';
import img2 from './manlogo.png';
import img3 from './skct1.png';
import img4 from './Arrow.png';
import { Link } from 'react-router-dom';
import './onlinefee.css';
class Online extends React.Component{
    render(){
        return(
            <div className='photo'>
              <div>
              <img className='dem1' src={img} alt="demm"></img>
              </div>
              <div >
              <img className='dem2' src={img1} alt="demm1"></img>
              </div>
              <div >
              <img className='dem3' src={img2} alt="demm2"></img>
              </div>
              <div>
              <img className='dem4' src={img3} alt="demm3"></img>
              </div>
              <div>
                <Link to='/Student'><img className='imageu' src={img4} alt="black"></img></Link>
                </div>
                <form className="form1">
                <div className='register'>
                    <input type="text" name="register number" placeholder="Register Number"/>
                </div>
                </form>
                <div>
                    <Link to='/Fee'><button className='feesbtn'><i><b>Next ></b></i></button></Link>
                </div>
                
               
               

                
            </div>
        )  
    }
}
export default Online;