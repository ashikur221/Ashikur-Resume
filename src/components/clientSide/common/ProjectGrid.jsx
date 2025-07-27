import React from 'react';
import BasicMagnetCard from './BasicMagnetCard';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { Link } from 'react-router-dom';

const ProjectGrid = ({ service }) => {
  console.log(service);
  const axiosPublic = useAxiosPublic();
  const { data: serviceProjects, isLoading } = useQuery({
    queryKey: ['serviceProjects', service?._id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/project_by_service/${service?._id}`);
      return res.data;
    }
  })

  return (
    <div className=''>
      <div className="flex">
        <p className="my-10 font-bold text-blue-700 border-b-2 pb-2 border-blue-700 lg:text-2xl">{service?.serviceName}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {
          serviceProjects?.length > 0 ?
            (serviceProjects?.map(project =>
              <Link
                target='_blank'
              to={project?.live_link}> <BasicMagnetCard key={project._id} project={project} /></Link>))
            :
            <p className="text-center text-2xl font-bold text-red-600">No Project Found</p>
        }
      </div>
    </div>
  );
};

export default ProjectGrid;