import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "./Portfolio.css";
import { EffectCube, Pagination } from "swiper/modules";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <h2 className="lg:text-4xl text-3xl font-semibold text-center lg:text-start">
          Lets have a look at <br /> my{" "}
          <span className="text-theme_primary">Projects</span>
        </h2>
        <div>
          <Link to={"/project"}>
            <button className="bg-theme_primary py-3 mt-5 lg:mt-0 px-6 text-white rounded-[60px]">
              See All
            </button>
          </Link>
        </div>
      </div>

      <div className="relative w-11/12 mx-auto h-max py-12">
        <Swiper
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          modules={[EffectCube, Pagination]}
          className="mySwiper h-max"
        >
          <SwiperSlide>
             <div className="flex gap-8 w-full">
                 <div>
                <img src="https://res.cloudinary.com/deifi77os/image/upload/v1726834481/Portfolio/g2ytqk3yo64t43fdlz4r.png" alt="" />
                 </div>
                 <div>
                <img src="https://res.cloudinary.com/deifi77os/image/upload/v1726834762/Portfolio/o3tihpenbxjdcradgxm1.png" alt="" />
                 </div>
             </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="flex gap-8 w-full">
                 <div>
                <img src="https://res.cloudinary.com/deifi77os/image/upload/v1726834481/Portfolio/nsgiaoirqhnkhvfxkxj8.png" alt="" />
                 </div>
                 <div>
                <img src="https://res.cloudinary.com/deifi77os/image/upload/v1726834762/Portfolio/m8pctkeh37aiytbi5her.png" alt="" />
                 </div>
             </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="flex gap-8 w-full">
                 <div>
                <img src="https://res.cloudinary.com/deifi77os/image/upload/v1726834482/Portfolio/agwzuub8r9cqykho14hn.png" alt="" />
                 </div>
                 <div>
                <img src="https://res.cloudinary.com/deifi77os/image/upload/v1726834762/Portfolio/y0dsgsguevcjsrpi29df.png" alt="" />
                 </div>
             </div>
          </SwiperSlide>

          

          
        </Swiper>
      </div>
    </div>
  );
};

export default Portfolio;
