import React from "react";
//import ColorSchemesExample from './Nav';
import './Events.css';
import img from './skct logo.jpg';
import img1 from './E1.jpg';
import img2 from './E2.jpg';
import img3 from './E3.jpg';
import Navbar from './Nav';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
class Sample extends React.Component{
    render(){
        return(
            <div className="swipe">
                <img className="slide1" src={img} alt="logo"></img>
                <div className="swiper">
                    <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            slidesPerGroup={3}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            pagination={{
                              clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper">
                            <SwiperSlide>
                                <img className="pic1" src={img1} alt="pic"></img>
                                <div>
                                    <h1 className="head1">Healthcare Hackathon-NOV 2022</h1>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="pic2" src={img2} alt="pic1"></img>
                                    <h1 className="head2">ICT Academy Youth Talk-SEP 2022</h1>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="pic3" src={img3} alt="pic2"></img>
                                    <h1 className="head3">Neo CODEATHON-NOV 2022</h1>
                            </SwiperSlide>
                            
                          </Swiper>
                </div>
                <div>
                    <Navbar></Navbar>
                </div>
                </div>
        );
    }
}
export default Sample;