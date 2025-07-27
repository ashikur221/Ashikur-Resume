import React from 'react';

const ServiceBanner = ({service}) => {
  return (
    <div>
      <div className="">
        <div className="lg:flex justify-between px-4">
          <div className=" flex justify-center  items-center lg:w-1/2">
            <div>
              <p className='text-6xl font-semibold '>
                {service?.serviceTitle}
              </p>

            </div>
          </div>
          <div className=" lg:w-1/2 flex justify-center text-[500px]">
            <img src={service?.serviceImageUrl} alt="" className='p-10' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;