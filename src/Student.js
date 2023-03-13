import React from 'react';
import { Link } from 'react-router-dom';
import img from './skct logo.jpg';
import img1 from './onlinefee.png';
import img2 from './scholarship.png';
import img3 from './hallticket.png';
import img4 from './application.png';
import img5 from './examresult.png';
import img6 from './upcoming events.png';
import img7 from './credit.png';
import img8 from './club.png';
import Navbar from './Nav';
import './Student.css';
class Stu extends React.Component{
    render(){
        return(
           <div className='image'>
            <div >
                <img className="Logo" src={img} alt="Logo" ></img>
                </div>
                <div className='row1'>
                    <div>
                        <Link to='/onlinefee'><img  src={img1} alt='qwert' className='img1' ></img></Link>
                    </div>
                    <div >
                        <Link to='/onlinefee'>
                            <h6 className="name"><i><b>Online Fee Payment</b></i></h6>
                        </Link>
                    </div>
                    <div>
                        <Link to='/Scholarship'>
                            <h6 className='name1'><i><b>Scholarships</b></i></h6>
                        </Link>
                    </div>
                    <div >
                        <Link to='/Hallticket'>
                            <h6 className="name2"><i><b>Exam Hallticket</b></i></h6>
                        </Link>
                    </div>
                    <div >
                        <Link to='/Form'>
                            <h6 className='name3'><i><b>Application Forms</b></i></h6>
                        </Link>
                    </div>
                    <div >
                        <Link to='/Sem'>
                            <h6 className="name4"><i><b>Exam Results</b></i></h6>
                        </Link>
                    </div>
                    <div >
                        <Link to='/Events'>
                            <h6 className="name5"><i><b>Upcoming Events</b></i></h6>
                        </Link>
                    </div>
                    <div >
                        <Link to='/Credit'>
                            <h6 className="name6"><i><b>Credit Score</b></i></h6>
                        </Link>
                    </div>
                    <div >
                        <Link to='/Club'>
                            <h6 className="name7"><i><b>Club Activity</b></i></h6>
                        </Link>
                    </div>
                </div>
                    <div>
                        
                        <div>
                            <Link to='/Scholarship'><img src={img2} alt='qwer' className='img2'></img></Link>
                        </div>
                        <div>
                            <Link to='/Hallticket'><img src={img3} alt='qweir' className='img3'></img></Link>
                     </div>
                        <div><Link to='/Form'><img src={img4} alt='qwker' className='img4'></img></Link></div>
                    </div> 
                <div className='row2'>
                    <div>
                        <Link to='/Sem'><img src={img5} alt='qwert' className='img5'></img></Link>
                    </div>
                    <div>
                        <Link to='/Events'><img src={img6} alt='qwer' className='img6'></img></Link>
                    </div>
                    <div>
                        <Link to='/Credit'><img src={img7} alt='qweir' className='img7'></img></Link>
                    </div>
                    <div>
                        <Link to='/Club'><img src={img8} alt='qwker' className='img8'></img></Link>
                    </div>
                </div>
              <div className='bar5'>
                <Navbar></Navbar>
              </div>
            </div>
        )
    }
}
export default Stu;