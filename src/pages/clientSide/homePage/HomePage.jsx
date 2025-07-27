
import { Helmet } from 'react-helmet-async'
import Banner from './Banner'
import BlogPost from './BlogPost'
import Discus from './Discus'
import HireMe from './HireMe'
import MyResult from './MyResult'
import Portfolio from './Portfolio'

import Service from './Service'
import Skills from './Skills'
import WorkExperience from './WorkExperience'
import Projects from './components/Projects'
import ExpandableCards from '../projectPage/ExpandableCards'
import { motion } from 'framer-motion'
import ProjectSlider from '../../../components/clientSide/projectComponents/ProjectSlider'


const HomePage = () => {

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
    <div className=' '>
      <Helmet>
        <title>Ashikur Portfolio</title>
      </Helmet>
      <Banner></Banner>
      <Skills />
      <ExpandableCards />
      <ProjectSlider />
      <Service></Service>
      {/* <Projects/> */}

      <WorkExperience></WorkExperience>
      <HireMe></HireMe>
      {/* <Portfolio></Portfolio> */}
      <MyResult></MyResult>
      <Discus></Discus>
      {/* <BlogPost></BlogPost> */}


    </div>
  )
}

export default HomePage