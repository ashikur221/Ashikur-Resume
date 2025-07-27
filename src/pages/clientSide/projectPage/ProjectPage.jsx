import React from 'react';
import Service from '../homePage/Service';
import Skills from '../homePage/Skills';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion'

import ExpandableCards from './ExpandableCards';

const ProjectPage = () => {

  const scrollAnimationVariants = {
    hidden: { opacity: 0, y: 2 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 50
      }
    }
  };

  return (
    <div className=' rounded-t-xl mt-4'>
      <Helmet>
        <title>Ashikur Portfolio | All projects</title>
      </Helmet>
      <motion.div
        className="lg:block hidden pt-1"
        initial="hidden"
        whileInView="visible"
        variants={scrollAnimationVariants}
        viewport={{ once: true, amount: 0.2 }}>
        <ExpandableCards></ExpandableCards>

      </motion.div>

      
      <Skills></Skills>

      <Service></Service>
    </div>
  );
};

export default ProjectPage;