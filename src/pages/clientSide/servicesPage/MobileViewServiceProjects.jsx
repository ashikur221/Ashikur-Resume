import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import CardComponents from './components/CardComponents';
import SkillCardComponent from '../skillRelatedPages/components/SkillCardComponent';



const MobileViewServiceProjects = ({ filteredProjects }) => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          filteredProjects?.map(project => <SwiperSlide key={project._id}>
            {/* <CardComponents item={project}></CardComponents> */}
            <SkillCardComponent item={project}></SkillCardComponent>
          </SwiperSlide>
          )
        }


      </Swiper>
    </>
  );
};

export default MobileViewServiceProjects;