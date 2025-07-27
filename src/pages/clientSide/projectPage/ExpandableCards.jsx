import React from 'react';
import { IonIcon } from '@ionic/react';
import { logoInstagram, logoFacebook, logoTwitter, logoLinkedin } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';


const ExpandableCards = () => {
  const axiosPublic = useAxiosPublic();
  const { data: projects = [] } = useQuery({
    queryKey: ['topProject'],
    queryFn: async () => {
      const res = await axiosPublic.get('/top-project');
      return res.data;
    }
  })


  return (
    <>
      <p className='  text-3xl text-center lg:mt-10 font-bold'>Have a look<br /> <span className='text-text_primari font-bold text-5xl'>My top projects</span></p>

      <div className="flex my-5 justify-center items-center py-5 bg-gradient-to-r from-universe_primary to-universe_secondary">
        <div className="flex">
          {projects?.map((card, index) => (
            <Link to={card?.live_link} target='_blank'>
              <div
                key={index}
                className={`relative w-52 h-[500px] bg-cover bg-center rounded-3xl overflow-hidden transition-all duration-500 hover:w-96 cursor-pointer border shadow-lg`}
                style={{ backgroundImage: `url(${card?.project_img_url})` }}
              >
                {/* Gradient overlay that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent rounded-b-3xl opacity-0 hover:opacity-100 transition-opacity duration-500">
                  {/* Test text that becomes visible on hover */}
                  <Link to={card?.live_link} target='_blank'>
                    <p className="absolute text-4xl text-white w-full text-center bottom-0 transform -translate-y-1/2 hover:text-blue-700">
                      {card?.title}
                    </p>
                  </Link>
                </div>
              </div>
            </Link>

          ))}
        </div>

      </div>
    </>
  );
};

export default ExpandableCards;