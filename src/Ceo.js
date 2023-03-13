import React from "react";
import './Ceo.css';
import img from './dia.png';
import img1 from './Arrow1.png';
import img2 from './book.png';
import img3 from './blacky.png';
import { Link } from "react-router-dom";
class Haan extends React.Component{
    render(){
        return(
            <div className="sam">
                <h1 className="off"><i>COE-OFFICE</i></h1>
                <div className="pic">
                    <img className="kav" src={img} alt='skct'></img>
                    <h3 className="zee">Dr.S.MARAGATHAM <br/>M.E.,Ph.D</h3>
                    <h4 className="zee1"><i>Chief Controller</i></h4>
                </div>
                
                <div>
                    <img className="kav1" src={img} alt='skct'></img>
                    <h3 className="zee2">Dr.R.RAMESH KUMAR</h3>
                    <h4 className="zee3"><i>Controller of<br/> Examination</i></h4>
                </div>
                <div>
                    <div className="hlo">
                    <img className="kav20" src={img} alt='skct'></img>
                    </div>
                    </div>
                    <div className="dell">
                        <h3 className="dell1">Mr.J.S.SUJIN</h3>
                        <h4 className="dell2"><i>Deputy - CoE</i></h4>
                    </div>
                    <div>
                        <div>
                        <img className="kav3" src={img} alt='skct'></img>  
                        </div>
                        </div>
                        <div>
                            <h3 className="leno">Mr.A.SURESHKUMAR</h3>
                        </div>
                        <div>
                            <h4 className="leno1"><i>Deputy - CoE</i></h4>
                        </div>
                        <div>
                        <img className="kav4" src={img} alt='skct'></img>
                        </div>
                        <div>
                            <h3 className="real">Mr.R.KAMAL</h3>
                        </div>
                        <div>
                            <h4 className="real2"><i>Senior Assistant</i></h4>
                        </div>
                        <div>
                        <img className="kav5" src={img} alt='skct'></img>
                        </div>
                        <div>
                            <h3 className="me">Mr.P.ARUN KARTHICK</h3>
                        </div>
                        <div>
                            <h4 className="me1"><i>Deputy -CoE</i></h4>
                        </div>
                        <div>
                        <img className="kav6" src={img} alt='skct'></img>
                        </div>
                        <div>
                            <h3 className="me2">Mr.V.RAVISHANKAR</h3>
                        </div>
                        <div>
                            <h4 className="me3"><i>Senior Assistant</i></h4>
                        </div>
                        <div>
                        <img className="kav7" src={img} alt='skct'></img>
                        </div>
                        <div>
                            <h3 className="me4">Mr.G.PASUPATHI</h3>
                        </div>
                        <div>
                            <h4 className="me5"><i>Junior Assistant</i></h4>
                        </div>
                        <div>
                        <img className="kav8" src={img} alt='skct'></img>
                        </div>
                        <div>
                            <h3 className="me6">Mr. P. CHINNARAJ</h3>
                        </div>
                        <div>
                            <h4 className="me7"><i>Office Assistant</i></h4>
                        </div>
                        <div>
                    <Link to='/Home'><img className="pics" src={img1} alt='skct2'></img></Link>
                </div>
                <div>
                    <img className="me10" src={img2}></img>
                </div>
                <div className="eae">
                    <div>
                        <img className="me11" src={img3}></img>
                    </div>
                    <div>
                        <h3 className="me12"><i>Nov/Dec 2022 UG/PG Regular<br/>Examination Timetable</i></h3>
                    </div>
                    <div>
                        <h3 className="me13"><i>Batch - 2021 Batch - 2021 <br/>UG(Regulation 2021)</i></h3>
                    </div>
                    <div>
                        <button className="sem1btn"><b><i>Semester III</i></b></button>
                    </div>
                    <div>
                        <h1 className="me14">.</h1>
                    </div>
                </div>
                <div className="eae1">
                    <div>
                        <img className="me11" src={img3}></img>
                    </div>
                    <div>
                        <h3 className="me12"><i>Nov/Dec 2022 UG/PG Regular<br/>Examination Timetable</i></h3>
                    </div>
                    <div>
                        <h3 className="me13"><i>Batch - 2021 Batch - 2021 <br/>UG(Regulation 2021)</i></h3>
                    </div>
                    <div>
                        <button className="sem3btn"><b><i>Semester I</i></b></button>
                    </div>
                    <div>
                        <h1 className="me14">.</h1>
                    </div>
                </div>
                <div>
                    <button className="sem2btn"><i><b>Semester II</b></i></button>
                </div>
                <div className="eae3">
                    <div>
                        <img className="me11" src={img3}></img>
                    </div>
                    <div>
                        <h3 className="me12"><i>Special Examination Timetable</i></h3>
                    </div>
                    <div>
                        <h3 className="me16"><i>Batch - 2021 Batch - 2021 <br/>UG(Regulation 2021)</i></h3>
                    </div>
                    <div>
                        <button className="sem4btn"><b><i>Semester I</i></b></button>
                    </div>
                    <div>
                        <h1 className="me17">.</h1>
                    </div>
                </div>
        
            </div>
        )
    }

}
export default Haan;