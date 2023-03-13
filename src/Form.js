import React from "react";
import './Form.css';
import pic15 from './doc.png';
import pic16 from './skct logo.jpg';
import Navbar from './Nav';
//import { Link } from "react-router-dom";
import Link from "@material-ui/core/Link";
//import PdfViewer from './components/PdfViewer';
/*import { Document,Page,pdfjs} from 'react-pdf';
import pdf from './sample.pdf';
import {Container, Header, Grid,} from 'semantic-ui-react'
import Sample from "./Events";
//pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
//import pic5 from './Symbol.png';*/

class Appli extends React.Component{
    render(){
        return(
            <div className="s14">
            <div className="s15">
                <img className="pc10" src={pic16}></img>
            </div>
            <div className="cen">
                <div className="s16">
                    <img className="pc11" src={pic15}></img>
                    <Link href="https://data.skct.edu.in/media/blueprint_of_question_paper.doc">
                        <p className="pc111">Blueprint of Question Paper</p>
                    </Link>
                </div>
                <div className="s17">
                    <img className="pc12" src={pic15}></img>
                    <p className="pc122">Hostel Form for Boys/Girls</p>
                </div>
                <div className="s18">
                        <img className="pc13" src={pic15}></img>
                        <p className="pc133"> Arrear Application Form-2022</p>
                
                </div>
                <div className="s19">
                    <img className="pc14" src={pic15}></img>
                    <p className="pc144">Gym Application Form</p>
                </div>
                <div className="s20">
                    <img className="pc15" src={pic15}></img>
                    <p className="pc155">Leave Form</p>
                </div>
                <div className="s21">
                    <img className="pc16" src={pic15}></img>
                    <Link href="https://data.skct.edu.in/media/No_dues.pdf">
                        <p className="pc166">No Dues Application</p>
                    </Link>
                </div>
                <div className="s22">
                    <img className="pc17" src={pic15}></img>
                    <Link href="https://data.skct.edu.in/media/Application_for_Payment_of_Condonation_fee.pdf">
                        <p className="pc177">Application for payment of condonation fee</p>
                    </Link>
                </div>
                <div className="s22">
                    <img className="pc18" src={pic15}></img>
                    <p className="pc188">Application for Transcripts</p>
                </div>
                <div className="s23">
                    <img className="pc19" src={pic15}></img>
                    <p className="pc199">Application for Temporary break of study</p>
                </div>
                <div className="s24">
                    <div className="hloo">
                        <img className="hlo" src={pic15}></img>
                    </div>
                    <Link href="http://skct.edu.in/v1/withdraw.html">
                        <p className="pc200">Application for withdrawal from <br/>
                        End Semester Examination</p>
                    </Link>
                </div>
            </div>
            <div className="bar1">
                    <Navbar></Navbar>
                </div>
               
            </div>
)
    }
}
export default Appli;