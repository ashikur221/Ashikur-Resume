import React from 'react';

const ServiceCard = ({ tagName, subtext, icon }) => {
  return (
    <div>
      <div className=" w-full text-white rounded-xl lg:flex justify-between items-center p-10">
        <div className="lg:mx-10 lg:w-1/2">
          <p className='text-white lg:text-3xl text-2xl'><span className='lg:text-5xl font-bold'>{tagName} <br /></span> {subtext}</p>
        </div>
        <div className=" lg:w-1/2">
          <img src={icon} alt="" className='lg:w-3/4' />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;