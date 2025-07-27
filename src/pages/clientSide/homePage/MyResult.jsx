import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import SwipSlide from "./SwipSlide";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const MyResult = () => {
  const axiosPublic = useAxiosPublic();
  const { data: testimonials = [] } = useQuery({
    queryKey: ['testimonials'],
    queryFn: async() => {
      const res = await axiosPublic.get('/testimonial');
      return res.data;
    }
  })


  return (
    <div className="bg-black py-16 px-8 text-white   bg-contain  rounded-2xl">
      <div className="container mx-auto  text-center w-2/3 relative  space-y-2">
        <h2 className="font-bold lg:text-5xl ">
          Testimonials That <br />
          Speak to <span className="text-theme_orange">My Results</span>
        </h2>
        <img
          src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725679411/React%20class/Portfolio%20Project/so0ncjl2y6almdqzdq8r.png"
          alt=""
          className="w-5 mx-auto -top-3 lg:right-96  absolute"
        />
        <div className="relative">
          <img
            className="absolute -right-5 -top-3"
            src="https://res.cloudinary.com/dqescabbl/image/upload/v1725847442/Vector_1_f2bcrf.png"
            alt=""
          />
          <p className="">
            Crafting Scalable Web Applications and Mentoring Tomorrow's Tech Leaders.
          </p>
          <img
            className="absolute -bottom-3"
            src="https://res.cloudinary.com/dqescabbl/image/upload/v1725847442/Vector_1_f2bcrf.png"
            alt=""
          />
        </div>
      </div>

      

      <div>
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {
            testimonials.map(testimonial => <SwiperSlide key={testimonial._id}>
              <SwipSlide testimonial={testimonial} className='hidden lg:block'></SwipSlide>
            </SwiperSlide>)
          }
          
         

          


         

         

          

          
        </Swiper>
      </div>
    </div>
  );
};

export default MyResult;
