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


        <div className="border   rounded-lg shadow-lg my-5 border-gray-200 flex flex-col lg:flex-row">

          <div className="lg:w-1/2  rounded-xl shadow-lg ">
            <img src={project?.project_img_url} alt="" className=' rounded-xl' />
          </div>

          <div className="lg:w-1/2 px-10 my-5 space-y-5 flex flex-col items-center justify-center">
            <p className="text-2xl font-bold">Description</p>
            <p className="text-justify">{project?.description}</p>
            <div className="text-[12px] lg:text-xl ">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">

                {
                  project?.live_link &&
                  <Link target='_blank' to={`${project?.live_link}`}>
                    <button className='bg-blue-600 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Live Link</button>
                  </Link>
                }

                {
                  project?.github_link &&
                  <Link target='_blank' to={`${project?.github_link}`}>
                    <button className='bg-green-500 w-full hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full'>Github Link</button>
                  </Link>
                }


                {
                  project?.projectDoc_link &&
                  <Link target='_blank' to={`${project?.projectDoc_link}`}>
                    <button className='bg-black w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Medium Link</button>
                  </Link>
                }

              </div>
            </div>
          </div>

        </div>


      </div>
    </div>
  );
};

export default ServiceProjectDetails;