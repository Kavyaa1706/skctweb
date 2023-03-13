import React from 'react';
import './login1.css';
import img from './loginimg1.jpeg';
import img1 from './square.png';
import img2 from './skct logo 2.png';
import img3 from './un.png';
import img4 from './psw2.png';
import { Link } from 'react-router-dom';
import img5 from './back1.png';
class Stuulog extends React.Component{
    render(){
        return(
            <div className='des'>
                <div>
                <img className='ract' src={img}></img>
            </div>
            <div>
                <img className='ract1' src={img1}></img>
            </div>
            <div>
                <img className='ract2' src={img2}></img>
            </div>
            <div>
                <img className='ract3' src={img3}></img>
            </div>
            
            <div>
                <form className='gen'>
                <input type="text1" placeholder="Username" name="text1" required />
                </form>
            </div>
            <div>
                <img className='ract4' src={img4}></img>
            </div>
            <div>
                <form className='general'>
                <input type="password" placeholder="Enter Password" name="psw" required />
                </form>
            </div>
            <div>
                <Link>
                    <h4 className='fpw'><i><b>Forget Password?</b></i></h4>
                </Link>
            </div>
            <div>
                <div className='box1'><input type='checkbox'></input>  </div>
                <div>
                    <h3 className='mine'><i>Remember Me</i></h3>
                </div>          
                </div>
                <div>
                    <div id='die'>
                        <Link to='/Student'><button className='lgbtn'><i><b>Login</b></i></button></Link>
                    </div>
                    <div>
        <Link to='/Home'><img className='faj' src={img5}></img></Link>
      </div>
                </div>
            
            </div>
        )
    }
}
export default Stuulog;