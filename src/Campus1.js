import React from 'react';
import './Campus1.css';
import img from './garden.jpg';
import img2 from './blacky.png';
import img3 from './skctlogo2.png';
import { Link } from 'react-router-dom';
import Navbar from './Nav';
class Implement extends React.Component{
    render(){
        return(
         <div className='tick'>
            <img className='tact' src={img}></img> 
            <div>
                <img className='tact1' src={img2}></img>
            </div>
            <div>
                <img className='tact2' src={img3}></img>
            </div>
            <div>
                <h1 className='life'><i>Campus Life</i></h1>
            </div>
                <div>
                    <h1 className='dot'>.</h1>
                    <Link to='/Aroma'><button className='arobtn'><b>Aroma</b></button></Link>
                </div>
                <div>
                    <Link to='/Medical'><button className='medbtn'><b>Medical center</b></button></Link>
                    <h1 className='dot1'>.</h1>
                </div>
                <div>
                    <Link to='/Seminar'><button className='sembtn'><b>Seminar Hall</b></button></Link>
                    <h1 className='dot2'>.</h1>
              </div>
              <div>
                    <Link to='/Auditorium'><button className='audbtn'><b>Auditorium</b></button></Link>
                    <h1 className='dot3'>.</h1>

              </div>
              <div>
                    <Link to='/yoga'><button className='yobtn'><b>Yoga</b></button></Link>
                    <h1 className='dot4'>.</h1>

              </div>
              <div>
                    <Link to='/transport'><button className='transbtn'><b>Transport</b></button></Link>
                    <h1 className='dot5'>.</h1>
              </div>
              <div>
                    <button className='libbtn'><b>Library</b></button>
                    <h1 className='dot6'>.</h1>
              </div>
              <div>
                    <Link to='/sports'><button className='sptbtn'><b>Sports</b></button></Link>
                    <h1 className='dot7'>.</h1>
              </div>
              <div>
                    <button className='smtbtn'><b>Smart Board</b></button>
                    <h1 className='dot8'>.</h1>
              </div>
              
              <div>
                <p className='tab'>
    <i>
        <b>
            SKCT has Excellent infrastrature!, It has 24/7 free wi-fi facility, well <br/>established lab,
            Centre of Excellence labs in collaboration with Govt<br/> and private organizations,ATM ,
            Amenities center, Gym are within<br/> Campus, Digitally enabled libraries, Neat and Modern Hostel rooms,<br/>
            Food Court with renowned brands like "aroma" etc..
        </b>
    </i>
                </p>
                <div>
                <h1 className='dot10'>.</h1>
                </div>
                <div>
                    <p className='tab1'><i><b>
                    Since SKCT is located in laps of western ghats, it will have awesome<br/> climate !!, Every staff in skct is very friendly.they will provide all the<br/> freedom which will make us to learn more thing and follow our passion.
                        </b></i></p>
                </div>
                <div>
                <h1 className='dot11'>.</h1>

                </div>
                </div>
              <div className='bar7'><Navbar></Navbar></div>
                    
            </div>
        )
    }
}
export default Implement;