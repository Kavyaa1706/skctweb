import React from "react";
import './Aroma.css';
import img3 from './blacky.png';
import img from './cg3.jpeg';
import img2 from './Arrow.png';
import { Link } from "react-router-dom";
class Aro extends React.Component{
    render(){
        return(
            <div className="rrr1">
                <div>
                    <img className="rrr" src={img}></img>
                </div>
                <div>
                    <img className="rrr2" src={img3}></img>

                </div>
                <div>
                    <h3 className="rrr3">
                        <i>A Cafeteria is functioning in the campus for the<br/>
                         benefit of students & staff. There are four other smaller<br/>
                          cafes and refreshment outlets inside the campus. Spacious, <br/>
                          airy & trendy cafeteria offers ample scope for students to <br/>
                          break free from their strenuous schedules and enjoy appetizing <br/>
                          food in an extremely casual yet pleasant ambience. Quality <br/>
                          vegetarian and non-vegetarian food prepared in a hygienic <br/>
                          environment are provided in the Cafeteria.</i>
                    </h3>
                </div>
                <div>
                    <h1 className="rrr4"><i>FOOD COURT</i></h1>
                </div>
                <div>
                    <Link to='/Campus1'><img className="rrr5" src={img2}></img></Link>
                </div>
        
            </div>
        )
    }
}
export default Aro;