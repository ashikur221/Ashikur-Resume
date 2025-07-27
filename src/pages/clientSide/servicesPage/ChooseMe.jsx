import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './style.css'
import ReverseCard from './ReverseCard';

const ChooseMe = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div>
      <div className="mt-40">
        <p className='text-center font-semibold text-5xl'>Why Choose Me ?</p>
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
            <ReverseCard
              tagName={"Passion for technology :"}

              subtext={`As a dedicated Computer Engineer, I am driven by a deep-rooted passion for technology. This passion fuels my desire to explore new frontiers, learn cutting-edge techniques, and contribute to the ever-evolving digital landscape.`}
              icon={"https://res.cloudinary.com/deifi77os/image/upload/v1727418442/Portfolio/Service%20Section/MERN/vz6bulissnodlagqcayg.png"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <ReverseCard
              tagName={"Client-centric approach : "}
              subtext={`As a dedicated Web Developer, I am committed to a client-centric approach that puts your needs and satisfaction at the forefront of everything I do. I believe that building strong relationships based on trust, understanding, and open communication is essential for delivering exceptional results.`}
              icon={"https://res.cloudinary.com/deifi77os/image/upload/v1727418599/Portfolio/Service%20Section/MERN/itxdwkridyoiqz7kzgf1.png"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <ReverseCard
              tagName={"Attention to detail :  "}
              subtext={`As a Web Developer, I am known for my meticulous attention to detail. I believe that even the smallest oversight can have a significant impact on the final outcome of a project. That's why I approach every task with a keen eye for precision and a commitment to excellence.`}
              icon={"https://res.cloudinary.com/deifi77os/image/upload/v1727418816/Portfolio/Service%20Section/MERN/mngo1h7fbaejxzzkc1sm.png"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <ReverseCard
              tagName={"Effective communication :"}
              subtext={`Effective communication is the key to building strong relationships and achieving success. I believe in open and honest dialogue, active listening, and adapting my communication style to different situations. This approach helps me create stronger connections, resolve conflicts effectively, and drive positive outcomes.`}
              icon={"https://res.cloudinary.com/deifi77os/image/upload/v1727419099/Portfolio/Service%20Section/MERN/g4zzj8cyputh4vwmd7hk.png"}
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

export default ChooseMe;