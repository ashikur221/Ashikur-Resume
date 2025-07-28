import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';

const ServiceProjectDetails = () => {
  window.scrollTo(0, 0);
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const { data: project = {} } = useQuery({
    queryKey: ['project'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/project/${id}`);
      return res.data;
    }
  })

  console.log(project);
  return (
    <div className='min-h-screen flex items-center '>
      <div className="">
        <p className="text-3xl text-center font-bold my-5">Project Name: {project?.title}</p>


        <div className="border  rounded-lg shadow-lg my-5 border-gray-200 flex">

          <div className="lg:w-1/2  rounded-xl shadow-lg ">
            <img src={project?.project_img_url} alt="" className='shadow-2xl rounded-xl' />
          </div>

          <div className="lg:w-1/2 px-10 my-5 space-y-5">
            <p className="text-2xl font-bold">Description</p>
            <p className="text-justify">{project?.description}</p>
            <div className="text-[12px] lg:text-xl ">
              <div className="flex gap-2">
                <Link target='_blank' to={`${project?.live_link}`}>
                  <button className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Live Link</button>
                </Link>

                <Link target='_blank' to={`${project?.live_link}`}>
                  <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full'>Github Link</button>
                </Link>
              </div>
            </div>
          </div>

        </div>


      </div>
    </div>
  );
};

export default ServiceProjectDetails;