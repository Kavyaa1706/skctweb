import React from 'react';
import img1 from './back1.png';
import img from './cg1.jpeg';
import img2 from './cg2.jpeg';
import img3 from './cg3.jpeg';
import img4 from './cg4.jpeg';
import img5 from './cg5.jpeg';
import img6 from './cg6.jpeg';
import img7 from './cg7.jpeg';
import img8 from './cg8.jpeg';
import img9 from './cg9.jpeg';
import img10 from './clg12.jpg';
import img11 from './clg15.jpg';
import { Link } from 'react-router-dom';
import './gallery.css';
class  Gall extends React.Component{
    render(){
        return(
            <div className='backy'>
              <div>
                <img className='picture'src={img} alt="picc" ></img>
                </div>
                <div className='shap'>
                <Link to='/Home'><img className='arw' src={img1} alt="arww"></img></Link>
                </div>
                <p id='word'><b><i>GALLERY</i></b></p>
                <div >
                <img className='picture1'src={img2} alt="picc1" ></img>
                </div>
                <div >
                <img className='picture2'src={img3} alt="picc2" ></img>
                </div>
                <div className='pic4'>
                <img className='picture3'src={img4} alt="picc3" ></img>
                </div>
                <div className='pic5'>
                <img className='picture4'src={img5} alt="picc4" ></img>
                </div>
                <div className='pic6'>
                <img className='picture5'src={img6} alt="picc5" ></img>
                </div>
                <div className='pic7'>
                <img className='picture6'src={img7} alt="picc6" ></img>
                </div>
                <div className='pic8'>
                <img className='picture7'src={img8} alt="picc7" ></img>
                </div>
                <div className='pic9'>
                <img className='picture8'src={img9} alt="picc8" ></img>
                </div>
                <div>
                    <img className='picture9' src={img10}></img>
                </div>
                <div>
                    <img className='picture10' src={img11}></img>
                </div>
            </div>
            
        )
    }
}
export default Gall;