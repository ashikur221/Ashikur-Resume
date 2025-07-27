import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const ProjectDetails = () => {
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
    <div className=' '>
      <div className="w-3/4 mx-auto space-y-5">


        <div className=" border rounded-lg shadow-lg  border-gray-200">
          <p className="text-xl text-center font-bold my-5">Necessary Documentation for : {project?.title}</p>

          <div className="text-[17px]   flex justify-center gap-4 my-10">
            <div className="space-y-3">
              <p className="font-bold">Live Link </p>
              <p className="font-bold">ERD Link </p>
              <p className="font-bold">Github Link </p>
              <p className="font-bold">Project Documentation Link </p>
              <p className="font-bold">API Documentation Link </p>
              <p className="font-bold">Optional Live Link </p>
            </div>
            <div className="space-y-3">
              <p className="font-semibold"><Link to={`${project?.live_link}`} target='_blank'> : {project?.live_link}</Link></p>
              <p className="font-bold"><Link to={`${project?.erd_link}`} target='_blank'> : {project?.erd_link}</Link></p>
              <p className="font-bold"><Link to={`${project?.erd_link}`} target='_blank'> : {project?.github_link}</Link></p>
              <p className="font-bold"><Link to={`${project?.erd_link}`} target='_blank'> : {project?.projectDoc_link}</Link></p>
              <p className="font-bold"><Link to={`${project?.erd_link}`} target='_blank'> : {project?.apiDoc_link}</Link></p>
              <p className="font-bold"><Link to={`${project?.erd_link}`} target='_blank'> : {project?.optionalLive_link}</Link></p>
            </div>
          </div>

          <div className="px-10 my-5">
            <p className="text-4xl font-bold">Description</p>
            <p className="text-justify">{project?.description}</p>
          </div>

        </div>

        <div className=" rounded-xl  ">
          <img src={project?.project_img_url} alt="" className='shadow-2xl rounded-xl' />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;