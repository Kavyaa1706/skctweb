import React from "react";
import './Acadamics.css';
import img from './dept.png';
import { Link } from "react-router-dom";
import img1 from './blacky.png';
import img2 from './back2.png';
import img3 from './back1.png';
class Acad extends React.Component{
    render(){
        return(
            <div className="bel">
                <div>
                    <Link to='#Acadamics'><button className="bel1"><i><b>Departments</b></i></button></Link>
                </div>
                <div>
                    <Link to='/Calender'><button className="bel2"><i><b>Acadamic Calender</b></i></button></Link>
                </div>
                <div>
                    <Link to='/Home'> <img className="bel47" src={img3}></img></Link>
                </div>
                <div>
                    <h1 className="bel3">|</h1>
                </div>
                <div>
                    <img className="bel4" src={img}></img>
                </div>
                <div>
                    <img className="bel5" src={img1}></img>
                </div>
                <div>
                    <img className="bel6" src={img2}></img>
                </div>
                <div>
                    <h2 className="bel7"><i>CIVIL ENGINEERING</i></h2>
                </div>
                <div>
                    <h3 className="bel8"><i>B.E Civil Engineering</i></h3>
                </div>
                <div>
                    <h1 className="bel9">.</h1>
                </div>
                <div>
                    <h3 className="bel10"><i>M.E Structural Engineering</i></h3>
                </div>
                <div>
                    <h1 className="bel11">.</h1>
                </div>
                <div>
                    <img className="bel12" src={img2}></img>
                </div>
                <div>
                    <h2 className="bel13"><i>COMPUTER SCIENCE AND ENGINEERING</i></h2>
                </div>
                <div>
                    <h1 className="bel14">.</h1>
                </div>
                <div>
                    <h1 className="bel15">.</h1>
                </div>
                <div>
                    <h1 className="bel17">.</h1>
                </div>
                <div>
                    <h1 className="bel18">.</h1>
                </div>
                <div>
                    <h1 className="bel19">.</h1>
                </div>
                <div>
                    <h1 className="bel20">.</h1>
                </div>
                <div>
                    <h3 className="bel16">
                        <i>
                        B.E Computer Science and Engineering<br/>
                        B.Tech Artificial Intelligence and Data Science<br/>
                        B.E. Computer Science and Engineering (Cyber Security)<br/>
                        B.E. Computer Science and Engineering (Internet of Things)<br/>
                        B.E. Computer Science and Engineering (Artificial Intelligence and Machine Learning)<br/>
                        M.E Computer Science and Engineering
                        </i>
                    </h3>
                </div>
                <div>
                    <h2 className="bel21"><i>ELECTRONICS AND COMMUNICATION ENGINEERING</i></h2>
                </div>
                <div>
                    <img className="bel22" src={img2}></img>
                </div>
                <div>
                    <h3 className="bel23">
                        <i>
                        B.E Electronics and Communication Engineering<br/>
                        M.E Applied Electronics
                        </i>
                    </h3>
                </div>
                <div>
                    <h1 className="bel24">.</h1>
                </div>
                <div>
                    <h1 className="bel25">.</h1>
                </div>
                <div>
                    <img className="bel26" src={img2}></img>
                </div>
                <div>
                    <h2 className="bel27"><i>ELECTRICAL AND ELECTRONICS ENGINEERING</i></h2>
                </div>
                <div>
                    <h3 className="bel28">
                        <i>
                        B.E Electrical and Electronics Engineering<br/>
                        M.E Power System Engineering
                        </i>
                    </h3>
                </div>
                <div>
                    <h1 className="bel29">.</h1>
                </div>
                <div>
                    <h1 className="bel30">.</h1>
                </div>
                <div>
                    <h2 className="bel31"><i>INSTUMENTATION AND CONTROL ENGINEERING</i></h2>
                </div>
                <div>
                    <img className="bel32" src={img2}></img>
                </div>
                <div>
                <h3 className="bel33">
                        <i>
                        B.E Instrumentation and Control Engineering
                        </i>
                    </h3>
                </div>
                <div>
                    <h1 className="bel34">.</h1>
                </div>
                <div>
                <h2 className="bel35"><i>MECHANICAL ENGINEERING</i></h2>
                </div>
                <div>
                    <img className="bel36" src={img2}></img>
                </div>
                <div>
                <h3 className="bel37">
                        <i>
                        B.E Mechanical Engineering<br/>
                        M.E Engineering Design Program
                        </i>
                    </h3>
                </div>
                <div>
                    <h1 className="bel38">.</h1>
                </div>
                <div>
                    <h1 className="bel39">.</h1>
                </div>
                <div>
                <h2 className="bel40"><i>INFORMATION ENGINEERING</i></h2>
                </div>
                <div>
                    <img className="bel41" src={img2}></img>
                </div>
                <div>
                <h3 className="bel42">
                        <i>
                        B.Tech Information Technology
                        </i>
                    </h3>
                </div>
                <div>
                <h2 className="bel43"><i>SCIENCE AND HUMANITIES</i></h2>
                </div>
                <div>
                <h2 className="bel44"><i>MASTER OF BUSINESS ADMINISTRATION</i></h2>
                </div>
                <div>
                    <img className="bel45" src={img2}></img>
                </div>
                <div>
                    <img className="bel46" src={img2}></img>
                </div>

            </div>
        )
    }
}
export default Acad;