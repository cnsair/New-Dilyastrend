import trend2 from "../../../assets/images/trend-2.jpg";
import trend3 from "../../../assets/images/trend-3.jpg";
import trend4 from "../../../assets/images/trend-4.jpg";
import trend5 from "../../../assets/images/trend-5.jpg";
import trend6 from "../../../assets/images/trend-6.jpg";
import trend7 from "../../../assets/images/trend-7.jpg";
import trend8 from "../../../assets/images/trend-8.jpg";
import trend9 from "../../../assets/images/trend-9.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Slider.css";

// import required modules
import { Navigation } from "swiper";

const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={trend2} alt="trend" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={trend3} alt="trend" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={trend4} alt="trend" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={trend5} alt="trend" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={trend6} alt="trend" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={trend7} alt="trend" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={trend8} alt="trend" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={trend9} alt="trend" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
