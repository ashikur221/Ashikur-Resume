

import { useEffect, useState } from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaFacebook, FaGithub, FaLinkedin, FaQuoteLeft } from 'react-icons/fa'
import { GoArrowUpRight } from 'react-icons/go'
import { Link } from 'react-router-dom'
import ReactStars from 'react-stars'
import { assets } from '../../../assets/assets'
import { motion } from 'framer-motion'
import { SlideLeft, SlideUp, Xooming } from '../../../assets/animate'

const Banner = () => {




  const [valueChage, setValueChange] = useState(true)

  const handleIconEnter = () => {
    setValueChange(false)

  }
  const handleIconLeave = () => {
    setValueChange(true)

  }



  return (
    <div className='container mx-auto'>

      {/* text area  */}
      <motion.div
        variants={SlideUp(0.5)}
        initial='initial'
        whileInView={'animate'}
        className='flex flex-col justify-center mt-20 items-center '>
        <div className="relative w-20">
          <p className='border border-black  py-2.5 px-5 mb-2 rounded-2xl'>Hello!</p>
          <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725679411/React%20class/Portfolio%20Project/so0ncjl2y6almdqzdq8r.png" alt="" className='w-5 absolute -top-5 -right-3' />
        </div>
        <div className="relative -z-10">
          <p className='lg:text-7xl md:text-5xl text-4xl text-center font-semibold'>I&apos;m <span className='text-theme_primary'>Ashikur</span>, <br /> MERNstack Developer</p>
          <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725679411/React%20class/Portfolio%20Project/so0ncjl2y6almdqzdq8r.png" alt="" className='w-12 rotate-180 absolute -bottom-8 -left-7' />
        </div>
      </motion.div>

      {/* image area  */}

      <div className="flex flex-col lg:flex-row gap-4 -mt-16 z-20 px-5 lg:px-0 " >
        <motion.div
          variants={SlideLeft(0.5)}
          initial="initial"
          whileInView={"animate"}
          className=" lg:w-1/4 mt-28 text-center lg:text-start" data-aos="fade-up">
          <FaQuoteLeft className='text-2xl mx-auto lg:mx-0' />
          <p className='text-xl font-bold leading-7 mt-5'>Crafting Scalable Solutions | MERN Developer & Web Development Instructor</p>
        </motion.div>
        <div className="relative lg:w-2/4 ">

          <div className="flex flex-col justify-center items-center" data-aos="zoom-in">
            <div className=' rounded-t-full z-20'>
              <motion.img
                variants={SlideUp(0.8)}
                initial="initial"
                whileInView={"animate"}
                src={assets.profile} alt="" className='' />
            </div>
            <motion.div
              variants={Xooming(0.5)}
              initial="initial"
              whileInView={"animate"}
              className='bg-theme_primary z-10 h-60 lg:h-80 right-0 lg:-mt-[325px] -mt-60 w-11/12 mx-auto rounded-t-full'></motion.div>

            {/* button section  */}


            <motion.div
              variants={SlideUp(0.5)}
              initial="initial"
              whileInView={"animate"}
              className='bg-white btn btn-glass z-50 lg:-mt-20 -mt-6 lg:px-6  lg:bottom-10 bottom-7 lg:left-32 md:left-36 left-9 inline-block lg:h-20 rounded-[60px]'>
              <div className='flex justify-center items-center  gap-3 opacity-[100%] lg:mt-5 mt-[2px] '>
                <div className="bg-blue-500 text-white rounded-full hover:text-black hover:bg-white">
                  <Link to={`https://github.com/Ashikur-ai`} target='_blank'>
                    <FaGithub className='size-10 p-2' />
                  </Link>
                </div>
                <div className="bg-blue-500 text-white rounded-full hover:text-black hover:bg-white">
                  <Link to={`https://www.linkedin.com/in/ashikur-rahman-dev/`} target='_blank'>
                    <FaLinkedin className='size-10 p-2' />
                  </Link>
                </div>

                <div className="bg-blue-500 text-white rounded-full hover:text-black hover:bg-white">
                  <Link to={`https://www.facebook.com/profile.php?id=100031241947508`} target='_blank'>
                    <FaFacebook className='size-10 p-2' />
                  </Link>
                </div>


              </div>
            </motion.div>


          </div>




        </div>
        <div className="lg:w-1/4 flex  lg:justify-end justify-center lg:mt-28 pb-3 lg:pb-0">
          <motion.div
            variants={SlideLeft(0.5)}
            initial="initial"
            whileInView={"animate"}
            className='text-end'>
            <ReactStars
              count={5}
              color1={'#0eb6f0'}
              size={32}
              color2={'#0eb6f0'} />
            <p className='text-4xl font-bold'>2+ years</p>
            <p className='font-medium'>Experience</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Banner