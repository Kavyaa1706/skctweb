import React from "react";
import  './Calender.css';
import img from './dept.png';
import img1 from './blacky.png';
import img2 from './cloud1.png'
import { Link } from "react-router-dom";
class Cal extends React.Component{
    render(){
        return(
            <div className="yel">
                <div>
                    <Link to='/Acadamics'><button className="yel1"><i><b>Departments</b></i></button></Link>
                </div>
                <div>
                    <Link to='/Calender'><button className="yel2"><i><b>Acadamic Calender</b></i></button></Link>
                </div>
                <div>
                    <h1 className="yel3">|</h1>
                </div>
                <div>
                    <img className="yel5" src={img}></img>
                </div>
                <div>
                    <img className="yel6" src={img1}></img>
                </div>
                <div>
                    <img className="yel7" src={img2}></img> 
                </div>
                <div>
                    <h2 className="yel8">ACADEMIC CALENDER 2022-2023 ODD SEM(PG II YEAR)</h2>
                </div>
                <div>
                    <img className="yel9" src={img2}></img> 
                </div>
                <div>
                    <img className="yel10" src={img2}></img> 
                </div>
                <div>
                    <img className="yel11" src={img2}></img> 
                </div>
                <div>
                    <img className="yel12" src={img2}></img> 
                </div>
                <div>
                    <img className="yel13" src={img2}></img> 
                </div>
                <div>
                    <img className="yel14" src={img2}></img> 
                </div>
                <div>
                    <img className="yel15" src={img2}></img> 
                </div>
                <div>
                    <img className="yel16" src={img2}></img> 
                </div>
                <div>
                    <img className="yel17" src={img2}></img> 
                </div>
                <div>
                    <h2 className="yel20">ACADEMIC CALENDER 2022-2023 ODD SEM(UG III,IV YEAR)</h2>
                </div>
                <div>
                    <h2 className="yel21">ACADEMIC CALENDER 2021-2022 EVEN SEM</h2>
                </div>
                <div>
                    <h2 className="yel22">ACADEMIC CALENDER 2021-2022 ODD SEM</h2>
                </div>
                <div>
                    <h2 className="yel23">ACADEMIC CALENDER 2021-2022 ODD SEM(II,III,IV YEAR)</h2>
                </div>
                <div>
                    <h2 className="yel24">ACADEMIC CALENDER 2020-2021 ODD SEM(II,III,IV YEAR)</h2>
                </div>
                <div>
                    <h2 className="yel25">ACADEMIC CALENDER 2020-2021 EVEN SEM(II,III,IV YEAR)</h2>
                </div>
                <div>
                    <h2 className="yel26">ACADEMIC CALENDER 2019-2020 EVEN SEM(II,III,IV YEAR)</h2>
                </div>
                <div>
                    <h2 className="yel27">ACADEMIC CALENDER 2019-2020 EVEN SEM(I YEAR)</h2>
                </div>
                <div>
                    <h2 className="yel28">ACADEMIC CALENDER 2019-2020 ODD SEM</h2>
                </div>
                
            </div>
        )
    }
}
export default Cal;