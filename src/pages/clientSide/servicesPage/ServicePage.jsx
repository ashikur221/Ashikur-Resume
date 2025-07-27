import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { TypeAnimation } from 'react-type-animation';
import ServiceBanner from './ServiceBanner';
import ServiceProjects from './ServiceProjects';
import MobileViewServiceProjects from './MobileViewServiceProjects';
import MyService from './MyService';
import ChooseMe from './ChooseMe';

const ServicePage = () => {
  window.scrollTo(0, 0);
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();

  // service 
  const { data: service = {} } = useQuery({
    queryKey: ['service'],
    queryFn: async () => {
      const res = await axiosPublic(`/service/${id}`);
      return res.data;
    }
  })
  // console.log(service);

  // projects by service 
  const { data: projects = [] } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const res = await axiosPublic.get('/project');
      return res.data;
    }
  })
  // console.log(projects);
  const filteredProjects = projects.filter(project => project.service_id === id);
  console.log(filteredProjects);

  return (
    <div className='container mx-auto mt-5'>

      <div className="flex justify-center rounded-2xl">
        <TypeAnimation
          sequence={[
            'Service Related ideas',
            1000,
            'Service Related Planning',
            1000,
            'Service Related Projects',
            1000,

          ]}
          wrapper="span"
          speed={50}
          style={{
            fontSize: '3em',
            display: 'inline-block',
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #2149B6, #001CD5)', // gradient text effect
            WebkitBackgroundClip: 'text',
            color: 'transparent', // required for gradient text
          }}
          repeat={Infinity}
        />
      </div>



      <ServiceBanner service={service}></ServiceBanner>
      <div className="hidden lg:block">
        <ServiceProjects filteredProjects={filteredProjects} ServiceName={service?.serviceName}></ServiceProjects>
      </div>
      <div className="lg:hidden">
        <MobileViewServiceProjects filteredProjects={filteredProjects}></MobileViewServiceProjects>
      </div>

      {/* <MyService></MyService>
      <ChooseMe></ChooseMe> */}



    </div>
  );
};

export default ServicePage;