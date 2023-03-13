import React from "react";
import './Fund.css';
import pic3 from './button.png';
//import pic4 from './blacky.png';
import pic5 from './Symbol.png';
import { Link } from "react-router-dom";

class Rights extends React.Component{
    render(){
        return(
            <div className="Prop">
            <div className="row">
            <h1 className="HH">INTELLECTUAL PROPERTY RIGHTS:</h1>  
            </div>  
            <div className="s5">
                <Link to='/Home'><img className="Arrow2" src={pic3}></img></Link>
            </div>
            <div>
                <p className="aa1"><b>
                    <i>
                    
                        IPR Cell of SKCT is formed with the objective of creating <br/>
                        awareness on various Intellectual Property Rights among <br/>
                        faculties and students of the institution. Dr.M.Kandha Babu, <br/>
                        Director,CIPR, Anna University Chennai inaugurated the IPR <br/>
                        cell on 19.09.2017.The activities of the cell include</i>
                </b></p>
            </div>
            <div>
                <h1 className="aa"><i>ABOUT US:</i></h1>
            </div>
            <div>
                <h1 className="aa2">.</h1>
            </div>
            <div>
                <h2 className="aa3"><i>Patent search</i></h2>
            </div>
            <div>
                <h1 className="aa4">.</h1>
            </div>
            <div>
                <h2 className="aa3"><i>Patent writing</i></h2>
            </div>
            <div>
                <h1 className="aa4">.</h1>
            </div>
            <div>
                <h2 className="aa3"><i>Claims</i></h2>
            </div>
            <div>
                <h1 className="aa4">.</h1>
            </div>
            <div>
                <h2 className="aa3"><i>Filling up of forms</i></h2>
            </div>
            <div>
                <h1 className="aa4">.</h1>
            </div>
            <div>
                <h2 className="aa3"><i>Copyrights, Trademarks, Industrial Design, etc</i></h2>
            </div>
            <div>
                <h1 className="aa4">.</h1>
            </div>
            <div>
                <h2 className="aa3"><i>Scrutinizing of patent applications</i></h2>
            </div>
            <div>
                <h1 className="aa4">.</h1>
            </div>
            <div>
                <h2 className="aa3"><i>Motivating students to appear for Intellectual <br/>
                                    Patent Talent Search Examination</i></h2>
            </div>
            <div>
                <h1 className="aa5"><i>STAFF:</i></h1>
            </div>
            <div>
                <h1 className="aa4">.</h1>
            </div>
            <div>
                <h2 className="aa3"><i>Dr.Srinivasan Alavandar, Principal - Chairman</i></h2>
            </div>
            <div>
                <h1 className="aa4">.</h1>
            </div>
            <div>
                <h2 className="aa3"><i>Dr. G.M.Tamilselvan, Head, Dept of Information and <br/>
                Technology - Member</i></h2>
            </div>
            <div>
                <h1 className="aa4">.</h1>
            </div>
            <div>
                <h2 className="aa3"><i>Dr. P.Prathap, Head, Dept of Mechanical Engineering -<br/>
                 Member</i></h2>
            </div>
            <div>
                <h1 className="aa4">.</h1>
            </div>
            <div>
                <h2 className="aa3"><i>Dr. M. Padmavathi, Head, Dept of Masters in Business <br/>
                Administration - Member</i></h2>
            </div>
            <div>
                <h1 className="aa4">.</h1>
            </div>
            <div>
                <h2 className="aa3"><i>Dr. P. Manju, Head, Dept of Instrumentation and <br/>
                Controls Engg. - Member</i></h2>
            </div>
            <div>
                <h1 className="aa4">.</h1>
            </div>
            <div>
                <h2 className="aa3"><i>Dr. I.Padmanaban, Head, Dept of Civil Engg. - Member</i></h2>
            </div>
            <div>
                <h1 className="aa4">.</h1>
            </div>
            <div>
                <h2 className="aa3"><i>Dr. S.Sundararaj, Professor, Dept. of Mech. Engg. - IPR <br/
                >Cell Coordinator</i></h2>
            </div>
            <div>
                <h1 className="aa5"><i>POLICY:</i></h1>
            </div>
            <div >
                <img className="Symbol1" src={pic5}></img>
            </div>
            <div>
            <h1 className="Sb"><b><i>IP POLICY</i></b></h1>
            </div>
            
                <div className="row40">
            <h1 className="HH2"><i>© All Rights Reserved 2021 - 2022. SKCT</i></h1>  
            </div> 
           
            </div>

        )
    }
}
export default Rights;