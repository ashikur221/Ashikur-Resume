// components/ProjectSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
// data/projects.js
const projects = [
  {
    id: 1,
    title: 'LearnDeck',
    description: 'A full-featured LMS with Clerk Auth and Stripe integration.',
    tech: ['React', 'Node.js', 'MongoDB', 'Clerk', 'Stripe'],
    live: 'https://learn-deck.vercel.app',
    github: 'https://github.com/yourname/learn-deck',
    image: '/images/learn-deck.png',
  },
  {
    id: 2,
    title: 'Postify',
    description: 'A social media app built using Appwrite, React, and Tailwind.',
    tech: ['React', 'Appwrite', 'Tailwind', 'React Query'],
    live: 'https://postify.vercel.app',
    github: 'https://github.com/yourname/postify',
    image: '/images/postify.png',
  },
  {
    id: 3,
    title: 'StreamNest',
    description: 'A YouTube clone with Next.js 15, tRPC, and Mux integration.',
    tech: ['Next.js', 'tRPC', 'Mux', 'Tailwind'],
    live: 'https://streamnest.vercel.app',
    github: 'https://github.com/yourname/streamnest',
    image: '/images/streamnest.png',
  },
  {
    id: 1,
    title: 'LearnDeck',
    description: 'A full-featured LMS with Clerk Auth and Stripe integration.',
    tech: ['React', 'Node.js', 'MongoDB', 'Clerk', 'Stripe'],
    live: 'https://learn-deck.vercel.app',
    github: 'https://github.com/yourname/learn-deck',
    image: '/images/learn-deck.png',
  },
  {
    id: 2,
    title: 'Postify',
    description: 'A social media app built using Appwrite, React, and Tailwind.',
    tech: ['React', 'Appwrite', 'Tailwind', 'React Query'],
    live: 'https://postify.vercel.app',
    github: 'https://github.com/yourname/postify',
    image: '/images/postify.png',
  },
  {
    id: 3,
    title: 'StreamNest',
    description: 'A YouTube clone with Next.js 15, tRPC, and Mux integration.',
    tech: ['Next.js', 'tRPC', 'Mux', 'Tailwind'],
    live: 'https://streamnest.vercel.app',
    github: 'https://github.com/yourname/streamnest',
    image: '/images/streamnest.png',
  },
];


import ProjectCard from './ProjectCard';
import BasicMagnetCard from '../common/BasicMagnetCard';
import ProjectGrid from '../common/ProjectGrid';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import ProjectSkeleton from '../common/ProjectSkeleton';

const ProjectSlider = () => {

  const axiosPublic = useAxiosPublic();
  // fetching all the services 
  const { data: services, isLoading } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const res = await axiosPublic.get('/service');
      return res.data;
    }
  })
  console.log(services);

  return (
    <div className="py-10 px-4  mx-auto">
      <p className='  text-3xl text-center my-10 font-bold'>Have a look<br /> <span className='text-text_primari font-bold text-5xl'>My All projects</span></p>
      {
        isLoading ?
          <ProjectSkeleton />
          :
          <>

            {
              services?.map((item) => <ProjectGrid key={item?._id} service={item} projects={projects} />)
            }
          </>
      }
    </div>

  );
};

export default ProjectSlider;
