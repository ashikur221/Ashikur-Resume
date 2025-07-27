import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';

const SkillProjectDetails = () => {
  window.scrollTo(0, 0);
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const { data: project = {} } = useQuery({
    queryKey: ['project'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/skill-project/${id}`);
      return res.data;
    }
  })

  console.log(project);
  return (
    <div className='min-h-screen flex items-center '>
      <div className="">
        <p className="text-3xl text-center font-bold my-5">Project Name: {project?.title}</p>


        <div className=" border rounded-lg shadow-lg my-5 border-gray-200">
          <p className="text-3xl text-center font-bold my-5">Necessary Documentation for : {project?.title}</p>

          <div className="text-[12px] lg:text-xl lg:w-1/2 mx-auto w-10/12 flex justify-around my-10">
            <div className="hidden lg:block">
              <p className="font-bold">Live Link :</p>
              <p className="font-bold">ERD Link :</p>
            </div>
            <div className="">
              <p className="font-semibold"><Link to={`${project?.live_link}`} target='_blank'> {project?.live_link}</Link></p>
              <p className="font-bold"><Link to={`${project?.erd_link}`} target='_blank'> {project?.erd_link}</Link></p>
            </div>
          </div>

          <div className="px-10 my-5">
            <p className="text-4xl font-bold">Description</p>
            <p className="text-justify">{project?.description}</p>
          </div>

        </div>

        <div className=" rounded-xl shadow-lg ">
          <img src={project?.project_img_url} alt="" className='shadow-2xl rounded-xl' />
        </div>
      </div>
    </div>
  );
};

export default SkillProjectDetails;