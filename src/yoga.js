import React from 'react';
import img2 from './yoga.png';
import img3 from './blacky.png';
import img6 from './Arrow.png';
import { Link } from 'react-router-dom';
import './yoga.css';
class  Yog extends React.Component{
    render(){
        return(
            <div className='pat'>
                <div>
                    <img className='exercise' src={img2} alt="exer"></img>
                </div>
                <div className='arrow3'>
                <img className='image19' src={img3} alt="arr"></img>
                </div>
                <div>
                    <Link to='/Campus1'><img className='ful' src={img6}></img></Link>
                </div>
                <p id='one3'><b><i>YOGA</i></b></p>
                <p id='two3'><b>To cultivate understanding, awareness, self-regulation <br/>and higher consciousness in the individual, Meditation<br/>
                 & Yoga is one of the essential elements for connecting <br/>
                 the highest part of ourselves. The original context of <br/>
                 yoga is the spiritual development practices to train the<br/>
                  body and mind to self-observe and become aware of <br/>
                  their own nature. Students practice Yoga and Meditation<br/>
                   in the Yoga Centre under the supervision of a Trained <br/>
                   Yoga Teacher both in the mornings and evenings.</b></p>
                
            </div>
            
        )
    }
}
export default Yog;
