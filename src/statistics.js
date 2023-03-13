import React from 'react';
import img2 from './statis.png';
import img3 from './blacky.png';
import img4 from './Arrow.png';
import img5 from './circlee.png';
import { Link } from 'react-router-dom';
import img6 from './place.png';
import img7 from './place1.png';
import img8 from './place2.png';

import './statistics.css';
class  Stat extends React.Component{
    render(){
        return(
            <div className='page10'>
                <div className="bgg"></div>
                <center><img className='Statis' src={img2} alt="Staa"></img></center>
                <div>
                <img className='image34' src={img3} alt="arr"></img>
                </div>
                <div >
                <Link to='/Home'><img className='image35' src={img4} alt="black"></img></Link>
                </div>
                <div className='que'>
                    <div>
                        <img className='sapt' src={img5}></img>
                    </div>
                    <div>
                        <img className='sapt1' src={img5}></img>
                    </div>
                    <div>
                        <img className='sapt2' src={img5}></img>
                    </div>
                    <div>
                        <img className='sapt3' src={img5}></img>
                    </div>
                    <div>
                        <img className='sapt4' src={img5}></img>
                    </div>
                </div>
                <div>
                    <h1 className='rou'><i>150+<br/>companies</i></h1>
                </div>
                <div>
                    <h1 className='rou1'>
                        <i>
                            800+
                            <br/>Companies <br/>Every year
                        </i>
                    </h1>
                </div>
                <div>
                    <h1 className='rou2'><i>Highest<br/>Package of<br/>Rs.28Lakhs</i></h1>
                </div>
                <div>
                    <h1 className='rou3'><i>Internship<br/>with Stipend<br/>upto Rs<br/>25,000/-</i></h1>
                </div>
                <div>
                    <h1 className='rou4'><i>Mandatory <br/>Industrial<br/>Training</i></h1>
                </div>
                <div>
                    <h1 className='rou7'>OUR LEADING RECQUITERS:</h1>
                </div>
                <div>
                    <img className='rou5' src={img6}></img>
                </div>
                <div>
                    <img className='rou8' src={img7}></img>
                </div>
                <div>
                    <img className='rou8' src={img8}></img>
                </div>

             </div>
            
        )
    }
}
export default Stat;