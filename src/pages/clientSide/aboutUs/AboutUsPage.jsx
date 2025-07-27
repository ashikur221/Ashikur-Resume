import React from 'react';
import { Helmet } from 'react-helmet-async';
import { TypeAnimation } from 'react-type-animation';
import WorkExperience from '../homePage/WorkExperience';
import EducationComponent from './EducationComponent';
import ProfessionalCertificate from './ProfessionalCertificate';

const AboutUsPage = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Helmet>
        <title>Ashikur Portfolio | About Me</title>
      </Helmet>
      <div className="flex flex-col-reverse lg:flex lg:flex-row justify-center items-center my-20">

        <div className="lg:w-2/3">
          <div className="flex justify-center rounded-2xl">
            <TypeAnimation
              sequence={[
                "I'm a Student",
                1000,
                "I'm a Computer Engineer",
                1000,
                "I'm an IT Executive",
                1000,
                "I'm a MERNStack Developer",
                1000,
                "I'm a MERNStack Mentor",
                1000,
                "I'm a Laravel Developer",
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
        </div>
        
        <div className="lg:w-1/3">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-1/2 mx-auto lg:mx-0 rounded-full ring ring-offset-2">
              <img src="https://res.cloudinary.com/deifi77os/image/upload/v1729357153/Portfolio/ho4xmlrrg3xwkqsw2qc7.jpg" alt="" className='' />
            </div>
          </div>

        </div>

        
      </div>
      <EducationComponent></EducationComponent>
      <WorkExperience></WorkExperience>
      <ProfessionalCertificate></ProfessionalCertificate>

    </div>
  );
};

export default AboutUsPage;