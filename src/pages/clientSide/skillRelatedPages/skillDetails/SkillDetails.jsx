import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import SkillProjectsList from '../components/SkillProjectsList';
import MobileViewServiceProjects from '../../servicesPage/MobileViewServiceProjects';

const SkillDetails = () => {
  window.scrollTo(0, 0);
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();

  const { data: skill = {} } = useQuery({
    queryKey: ['skill'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/skills/${id}`);
      return res.data;
    }
  })

  // console.log(skill);

  const { data: projects = [] } = useQuery({
    queryKey: ['skillRelatedProjects'],
    queryFn: async () => {
      const res = await axiosPublic.get('skill-project');
      return res.data;
    }
  })

  console.log(projects);
  const filteredProjects = projects.filter(project => project.skill_id === id);
  console.log(filteredProjects);

  return (
    <div>
      <div className="flex justify-center rounded-2xl">
        <TypeAnimation
          sequence={[
            'Skill Related ideas',
            1000,
            'Skill Related Planning',
            1000,
            'Skill Related Projects',
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

      <div className="hidden lg:block">
        

        <SkillProjectsList filteredProjects={filteredProjects} skillName={skill?.name}></SkillProjectsList>
      </div>
      <div className="lg:hidden">
        <MobileViewServiceProjects filteredProjects={filteredProjects}></MobileViewServiceProjects>
      </div>



    </div>
  );
};

export default SkillDetails;