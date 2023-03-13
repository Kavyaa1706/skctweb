import React from 'react';
import {Link} from "react-router-dom";
import './Aboutus.css';
import img from './Image.jpg';
import img1 from './cpimg.png';
import img2 from './adithya.png';
import img3 from './ceoimg.png';
import img4 from './princ.png';
import img5 from './core.png';
import img6 from './oval.png';
import img7 from './skctbg.png';
import img8 from './vivek.png';
import img9 from './Arrow1.png';

class Kashif extends React.Component{
    render(){
        return(
            <div className='page1'>

                <center><img src={img} alt="picture1" width={1000}></img></center>
                <h1><i><b>VISION:</b></i></h1>
                <p><i><b>Sri Krishna College of Technology aspires to be recognized as one of the<br/> 
                    pioneers in imparting world class technical education through technology<br/> 
                    enabled innovative teaching learning processes with a focus on research <br/>
                    activities to cater, to the societal needs.</b></i></p>
                <h1 className='mision'><i><b>MISSION:</b></i></h1>  
                <p><i>
                    <b>
                        To be recognized as centre of excellence in science, engineering and technology through <br/>
                        effective teaching and learning processes by providing a conducive learning environment.<br/>
                        To foster research and development with creative and entrepreneurial skills by means of <br/>
                        innovative applications of technology.
                        Accomplish expectations of the society and industry<br/>
                         by nurturing the students to be competent professionals with integrity.
                    </b></i>
</p> 
                    <h2 className='Management'><b><i>MANAGEMENT</i></b></h2>
                <img className='image1' src={img1} alt="malarvizhi" width={1000}></img> 
                <h3><i><b>Smt.S.Malarvizhi</b></i></h3>
                <h4><i><b>CHAIRPERSON AND MANAGING TRUSTEE</b></i></h4>
                <h5><i><b>“The highest education is that which does not merely give us <br/>
                    information but makes our life in harmony with all existence”.</b></i></h5>
                <h6><i><b>- Rabindranath Tagore</b></i></h6>
                <div className='in'>
                <p>
                    <i>
                    The rise of SKCT to prominence over its thirty five years of <br/>
                        existence is primarily attributed to its mission to accomplish <br/>
                        expectations of the society and industry by nurturing the students <br/>
                        to be competent professionals with integrity, besides profound <br/>
                        technical knowledge and skill. In rethinking education to deal with <br/>
                        rapid changes at the dawn of the twenty-first century, innovation,<br/>
                        technology, and research are indispensable tools of education. As <br/>
                        we are quite aware, education is central to the knowledge-based <br/>
                        society that derives from human potential.“Learning to Be, and <br/>
                        Learning: The Treasure Within” have been key sources for education <br/>
                        policy makers and practitioners internationally. I invite you <br/>
                        to explore the treasure within you through outstanding teaching, <br/>
                        choice based credit system, and a wide range of academic programs <br/>
                        and extra-curricular offerings which SKCT has. Generations of <br/>
                        students, staff, alumni, and parents have built our reputation, <br/>
                        and we continue to grow in the eyes of the public. Welcome to SKCT <br/>
                        and witness the pathways of learning which leads to the mainstream of <br/>
                        the knowledge revolution. Come and confront confidently the challenges <br/>
                        that the future holds in store!
                </i>
                    </p>
                    </div>
                    <img className='image2' src={img2} alt="adithya" width={1000}></img>
                    <div className='sample'>
                        <h6><i><b>Mr.K.Adithya, B.E. MOB </b></i></h6>
                    </div>
                    <div className='truste'>
                    <h6><i><b>TRUSTEE</b></i></h6>
                    <div className='Info'>
                        <p>
                        <i>
                            <b id='info2'>
                                “The secret of getting ahead is getting started. The secret of <br/>
                                getting started is breaking your complex overwhelming tasks into small <br/>
                                manageable tasks, and then starting on the first one.”.- Mark Twain
                            </b></i></p>
                    </div>
                    </div>
                    <div className='info2'>
                        <p><i id='info3'>
                            Since its founding in 1985, Sri Krishna College of Technology (SKCT) <br/>
                            has grown to become one of the premier technical institutions of higher <br/>
                            learning in this part of the country. It is a research-led Institute, <br/>
                            known for the excellence of its teaching, skill development, its research, <br/>
                            and its service to local, national, and International communities. As we know, <br/>
                            knowledge will be a key resource and will be highly sought-after within India<br/>
                            and around the world. We at SKCT provide value-based education to our youth and <br/>
                            enable them to join us in the process of nation-building and inclusive growth in <br/>
                            their chosen career.I, therefore, welcome the aspiring students to be part of our <br/>
                            vision and become the stars of tomorrow.
                        </i></p> 
                    </div>
                    <img className='imagee3' src={img3} alt="picture3" width={1000}></img>
                    <div className='sample1'>
                        <h6><i><b>Dr. K .Sundararaman, <br/>
                        M.Com., M.Phil., Ph.D </b></i></h6>
                    </div>
                    <div className='ceo'>
                    <h6><i><b>CEO</b></i></h6>
                    <div className='ceo1'>
                        <p>
                        <i>
                            <b id='ceo2'>
                            Dr. K .Sundararaman, M.Com., M.Phil., Ph.D. has four decades of <br/>
                            teaching experience to his credit as the Head of the Department of <br/>
                            Commerce and also more one and half decades of dynamic administrative <br/>
                            experience in managing all the courses under self-financing stream in a <br/>
                            reputed autonomous College in Coimbatore. He joined the college as Principal <br/>
                            in the year 2005. He has published five books and his area of specialization is <br/>
                            Quality Assurance in Higher Education.
</b></i></p>
                    </div>
                    </div>
                    <img className='image4' src={img4} alt="principle" width={1000}></img>
                    <div className='sample2'>
                        <h6><i><b>Dr. S. Maragatham, <br/>
                            M.E., Ph.D
                        </b></i></h6>
                    </div>
                    <div className='princ1'>
                    <h6><i><b>PRINCIPAL</b></i></h6>
                    <div className='princ2'>
                        <p>
                        <i>
                            <b id='princ3'>
                            Dr.S.Maragatham,M.E,Ph.D.<br/>
                            Contact:9344157946<br/>
                            Email:principal@skct.edu.in
                        </b></i></p>
                    </div>
                    </div>
                    <div className='Core'>
                    <center><img className='image5' src={img5} alt="picture9" width={1000}></img></center>
                    </div>
                    <img className='image6' src={img6} alt="shape"></img>
                    <img className='image6' src={img6} alt="shape"></img>
                    <img className='image6' src={img6} alt="shape"></img>
                    <div className='Ovalname'>
                        <h6 id='ovl'><i><b>EVOLVE AND ADAPT</b></i></h6>
                    </div>
                        <p id='cc1'>The people who work here are smart, dedicated, and committed with <br/>
                        core values.We believe our nation's future depends on our ability to make <br/>
                        effective use of the enormous talent and resources represented by the diversity <br/>
                        of our people and our ideas.</p>
                    <img className='image7' src={img6} alt="shape"></img>
                    <img className='image7' src={img6} alt="shape"></img>
                    <img className='image7' src={img6} alt="shape"></img>
                    <div className='Ovalname2'>
                        <h6 id='ovl2'><i><b>TEAM ON A MISSION</b></i></h6>
                    </div>
                        <p id='cc2'>Teamwork brings a spirit of setting personal preferences aside while <br/>
                        focusing on greater good.Teamwork builds confident and skill and every individual <br/>
                        contribute by offering values to guide our institutions.</p>
                        <div className='Values'>
                    <center><img className='image8' src={img5} alt="picture9" width={1000}></img></center>
                    </div>
                    <img className='image9' src={img6} alt="shape"></img>
                    <img className='image9' src={img6} alt="shape"></img>
                    <img className='image9' src={img6} alt="shape"></img>
                    <div className='Ovalname3'>
                        <h6 id='ovl3'><i><b>CHALLENGE AND COLLABORATE</b></i></h6>
                    </div>
                        <p id='cc3'>To innovate, our team is our toughest critics, our biggest challengers <br/>
                        and our loudest supporters.Students are endowed with limitless abilities and SKCT <br/>
                        provides ample opportunity to the young technocrats to exhibit their talents in the <br/>
                        field of science and technology. </p>
                    <img className='image10' src={img6} alt="shape"></img>
                    <img className='image10' src={img6} alt="shape"></img>
                    <img className='image10' src={img6} alt="shape"></img>
                    <div className='Ovalname4'>
                        <h6 id='ovl4'><i><b>WORK ETHIC WINS</b></i></h6>
                    </div>
                        <p id='cc4'>We believe the teams willing to put in the extra effort, go the extra mile, <br/>
                        and are accountable for their actions, will be the ones who see their visions <br/>and dreams
                        realized</p>
                    <div className='Core1'>
                    <center><img className='image11' src={img5} alt="picture9" width={1000}></img></center>
                    </div>
                    <img className='image12' src={img6} alt="shape"></img>
                    <img className='image12' src={img6} alt="shape"></img>
                    <img className='image12' src={img6} alt="shape"></img>
                    <div className='Ovalname5'>
                        <h6 id='ovl5'><i><b>BE PIONEERS</b></i></h6>
                    </div>
                        <p id='cc5'>We innovate and push for boundless creativity through curiosity. <br/>
                        Meeting sustainable development goals will require action on a number of fronts, <br/>
                        including harnessing and maximizing the potential of technological innovation. </p>
                    <img className='image13' src={img6} alt="shape"></img>
                    <img className='image13' src={img6} alt="shape"></img>
                    <img className='image13' src={img6} alt="shape"></img>
                    <div className='Ovalname6'>
                        <h6 id='ovl6'><i><b>ACT WITH INTEGRITY</b></i></h6>
                    </div>
                        <p id='cc6'>We adopt truthfulness, honesty, fairness and transparency in <br/>
                        the conduct of our academic,administrative and professional activities as a <br/>
                        means for achieving holistic development of the students.</p>
                        <div className='Core2'>
                    <center><img className='image14' src={img5} alt="picture9" width={1000}></img></center>
                    </div>
                    <img className='image15' src={img6} alt="shape"></img>
                    <img className='image15' src={img6} alt="shape"></img>
                    <img className='image15' src={img6} alt="shape"></img>
                    <div className='Ovalname7'>
                        <h6 id='ovl7'><i><b>AUTONOMY AND ATTITUDE</b></i></h6>
                    </div>
                        <p id='cc7'>We’re a team of self-starters who take serious pride in our work - <br/>
                        and it shows.We provide the freedom of opportunity—to explore, to collaborate and <br/>
                        to challenge oneself in their field of specialization.</p>
                    <img className='image16' src={img6} alt="shape"></img>
                    <img className='image16' src={img6} alt="shape"></img>
                    <img className='image16' src={img6} alt="shape"></img>
                    <div className='Ovalname8'>
                        <h6 id='ovl8'><i><b>AUTHENTICITY</b></i></h6>
                    </div>
                    <div>
                        
                            <p id='cc8'>We encourage students to be themselves and we embrace everyone <br/>
                            for their unique contributions to the team. We also set expectations that <br/>
                            everyone should acknowledge,and take responsibilities for mistakes. And then,<br/>
                            treat mistakes as opportunities for learning and growth.</p>
                            <center><img className='image16' src={img6} alt="picture9" width={1000}></img></center>
                            <div className='gallery'>
                            <center><img className='image17' src={img7} alt="picture9" width={1000}></img></center>
                            </div>
                            <center><img className='image18' src={img8} alt="picture9" width={1000}></img></center>
                    </div>
                        
                        <div >
                        <h6 className='abcd'><i><b>RENOWNED VISITORS OF OUR INSTITUTE</b></i></h6>
                    </div>
                    <div >
                        <Link to='/Home'><img className='faf' src={img9}></img></Link>
                    </div>
                

            </div>
            
        )
    }
}


export default Kashif;
