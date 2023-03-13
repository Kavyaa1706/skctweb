import React from 'react';
import {Link} from 'react-router-dom';
import './Login.css';
import img from './loginimg1.jpeg';
import img1 from './square.png';
import img2 from './un.png';
import img3 from './psw2.png';
import img4 from './skct logo 2.png';
import img5 from './arr2.png';
class Stulog extends React.Component{
    render(){
  return (
    <div className="demo">
      <div className='demo1'>
        <center><img className='login1' src={img} alt='login'></img></center>
        <img className='square' src={img1} alt='sq'></img>
        <img className='user' src={img2} alt='sq'></img>
        <img className='psw' src={img3} alt='psw1'></img>
        <img className='logo' src={img4} alt='logo'></img>
  <div>
      <form className='form6'>
        <div className='attract'><input type="password" placeholder="Enter Password" name="psw" required /></div><br/>
      </form>
    </div>

  <div>
    <form className='form7'>
      <div className='repel'><input type="text1" placeholder="Username" name="text1" required /></div>
    </form>
  </div>

 <div className='box'>
   
        <div className="check">
          <input type="checkbox" />
          <p>Remember me</p>
        </div>
 </div>
 </div>
      <div className='frg'>
        <Link className='frg'><b><i>Forget Password ?</i></b></Link>
      </div>
      <div>
        <img className='faj' src={img5}></img>
      </div>
      </div>
  

  
  );
}
}

export default Stulog;