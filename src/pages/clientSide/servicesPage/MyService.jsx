import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import ServiceCard from './ServiceCard';

const MyService = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div>
      <div className="mt-40">
        <p className='text-center font-semibold text-5xl'>Services I Offer</p>
        <div className="divider"></div>
      </div>


      <div className="rounded-xl my-5 bg-black">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className}" style="background-color: white;"></span>`,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper text-white rounded-xl"
        >
          <SwiperSlide>
            <ServiceCard
              tagName={"Custom web development :"}

              subtext={`As a skilled Web developer, I specialize in crafting custom web applications that perfectly align with your business goals and vision. I understand that one-size-fits-all solutions often fall short, and that's why I'm dedicated to delivering tailored web applications that meet your specific requirements.`}
              icon={"https://res.cloudinary.com/deifi77os/image/upload/v1727197584/Portfolio/Service%20Section/MERN/axvmh90qeuhbpynugnoc.png"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <ServiceCard
              tagName={"API integration : "}
              subtext={`As a skilled Web developer, I specialize in integrating your web application with third-party APIs to enhance functionality and expand your reach. APIs (Application Programming Interfaces) allow your application to interact with external services, providing access to valuable data and features.`}
              icon={"https://res.cloudinary.com/deifi77os/image/upload/v1727197439/Portfolio/Service%20Section/MERN/oy6a1jetbac1kzhsihfy.png"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <ServiceCard
              tagName={"Maintenance and support : "}
              subtext={`As a dedicated Web developer, I am committed to providing ongoing maintenance and support for your web application. I understand that even the best-built applications require ongoing attention to ensure optimal performance, security, and functionality.`}
              icon={"https://res.cloudinary.com/deifi77os/image/upload/v1727197373/Portfolio/Service%20Section/MERN/weuvnzswmzmsfuhx08yx.png"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <ServiceCard
              tagName={"Consulting services : "}
              subtext={`As a seasoned Web developer, I offer expert consulting services to help you navigate the complexities of web development and make informed decisions about your projects. My goal is to provide you with the guidance and support you need to achieve your objectives.`}
              icon={"https://res.cloudinary.com/deifi77os/image/upload/v1727198111/Portfolio/Service%20Section/MERN/ywrfjvvartxuj7ql8tr0.png"}
            />
          </SwiperSlide>

          <div className="autoplay-progress text-white">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20" stroke="white" fill="none"></circle>
            </svg>
            <span ref={progressContent} className="text-white"></span>
          </div>
        </Swiper>
      </div>

    </div>
  );
};

export default MyService;