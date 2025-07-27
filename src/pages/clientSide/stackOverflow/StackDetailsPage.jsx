import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const StackDetailsPage = () => {
  window.scrollTo(0, 0)
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const { data: stack = {} } = useQuery({
    queryKey: ['stack'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/stack-overflow/${id}`);
      return res.data;
    }
  })

  return (
    <div className="bg-white py-12">
      <Helmet>
        <title>Ashikur Portfolio | Stack Details</title>
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Blog Image */}
        <div className="mb-8">
          <img
            src={stack?.stack_img_url}
            alt="Blog Cover"
            className="w-full h-96 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Blog Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{stack?.title}</h1>

        {/* Blog Meta Info */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-sm text-gray-500">
            <span>By <span className="text-blue-600">{ stack?.author }</span></span> |{' '}
            <span>{ stack?.date }</span>
          </div>
          <div className="text-sm text-gray-500">
            <span>Category: <span className="text-blue-600">{ stack?.category }</span></span>
          </div>
        </div>

        {/* Blog Content */}
        <div className="prose max-w-none text-gray-700 mb-10">
          <p dangerouslySetInnerHTML={{ __html: stack?.description }} className='px-2'>
          </p>
        
        </div>

        {/* Video Section */}
       
        {
          stack?.video_url ? 
            <div className="relative w-[80vw] h-[45.9vw] z-10 sm:w-full sm:h-[37vw] lg:h-[470px]  lg:mx-auto rounded-2xl p-2 bg-black border-2 border-black">
              <div className='absolute w-full h-full bg-transparent z-10 cursor-pointer'>

              </div>
              <ReactPlayer
                // controls="true"
                url={stack?.video_url}
                width="100%"
                height="100%"

              />


            </div>
            :
            <>No video guideline</>
        }
        

        
      </div>
    </div>
  );
};

export default StackDetailsPage;
