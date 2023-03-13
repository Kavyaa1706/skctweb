import React from "react";
import img from './skct logo.jpg';
import './Sem.css';
import img1 from './whrec.jpg';
import Navbar from "./Nav";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
class Emo extends React.Component{
    render(){
        return(
            <div className="semester">
                <img className="slide2" src={img} alt="logo"></img>
                <div className="semester1">
                    <h1 className="exam1"><i>->  Semester exam results-2022</i></h1>
                    <h1 className="exam2"><i>->  Arrear exam results-2022</i></h1>
                    <h1 className="exam3"><i>->  NPTEL exam results-2022</i></h1>
                    <h1 className="pref">Top Perfomers-2022</h1>
                </div>
                <div className="swiper1">
                <Swiper
                            slidesPerView={4}
                            spaceBetween={0}
                            slidesPerGroup={5}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            pagination={{
                              clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper11">
                               
                                <SwiperSlide>
                                    <img className="pics1" src={img1} alt="pic2"></img>
                                    <div>
                                    <h1 className="read4">Mridini <br/>Shankar</h1>
                                    <h2 className="read5"> Topped SEM 1</h2>
                                    <h1 className="read6">97.5%</h1>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className="pics2" src={img1} alt="pic3"></img>
                                    <div>
                                    <h1 className="read7">Prandhaman</h1>
                                    <h2 className="read8"> Topped SEM 2</h2>
                                    <h1 className="read9">95%</h1>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className="pics3" src={img1} alt="pic3"></img>
                                    <div>
                                    <h1 className="read10">Jeeva</h1>
                                    <h2 className="read11"> Topped SEM 2</h2>
                                    <h1 className="read12">93%</h1>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className="pics4" src={img1} alt="pic3"></img>
                                    <div>
                                    <h1 className="read13">Pramoth<br/> Magajan</h1> 
                                    <h2 className="read14"> Topped SEM 2</h2>
                                    <h1 className="read15">95%</h1>
                                    </div>

                                </SwiperSlide>
                            
                            </Swiper>
                </div>
                <div className="bar">
                    <Navbar></Navbar>
                </div>
            </div>
        )
    }
}
export default Emo;