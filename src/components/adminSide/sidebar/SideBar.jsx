import React, { useState } from 'react';
import { BsMenuButtonWideFill, BsStackOverflow } from 'react-icons/bs';
import { GrMoney } from 'react-icons/gr';
import { IoMdCard } from 'react-icons/io';
import { IoCartOutline, IoCloseCircleOutline } from 'react-icons/io5';
import { MdMenuOpen, MdOutlineCategory, MdOutlineDiscount, MdOutlineLockPerson, MdOutlineRateReview } from 'react-icons/md';
import { RiAdminLine } from 'react-icons/ri';
import { RxDashboard } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';
import { SiNginxproxymanager } from 'react-icons/si';
import { SiHyperskill } from "react-icons/si";

// update code 
import { FaHome, FaUsers, FaWpforms } from 'react-icons/fa';
import { FaCircleUser, FaFileWaveform } from 'react-icons/fa6';
import { MdAdd, MdAddCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FaRegComments } from "react-icons/fa";
import NavigationItem from './NabigationItem';
import Dropdown from './Dropdown';
import { GrDashboard } from "react-icons/gr";
import { MdDesignServices } from "react-icons/md";
import { CiAlignTop } from 'react-icons/ci';



const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


 

  const blogUrls =
    <>
      <NavigationItem to="/dashboard/addBlog" icon={MdAddCircle} label="Add Blog" />
      <NavigationItem to="/dashboard/manageBlog" icon={SiNginxproxymanager} label="Manage Blogs" />
    </>
  const comments =
    <>
      <NavigationItem to="/dashboard/manageComments" icon={FaRegComments} label="Manage Comments" />
    </>

  const homepageUrls =
    <>
      <NavigationItem to="/dashboard/manageHomepageContent" icon={SiNginxproxymanager} label="Manage Homepage Content" />
      <NavigationItem to="/dashboard/manageCountDown" icon={SiNginxproxymanager} label="Manage CountDown" />
    </>

  const facultyUrls =
    <>
      <NavigationItem to="/dashboard/addFaculty" icon={MdAddCircle} label="Add Faculty" />
      <NavigationItem to="/dashboard/manageFaculty" icon={SiNginxproxymanager} label="Manage Faculty" />
    </>

  const testimonialUrls =
    <>
      <NavigationItem to="/dashboard/addTestimonial" icon={MdAddCircle} label="Add Testimonial" />
      <NavigationItem to="/dashboard/manageTestimonial" icon={SiNginxproxymanager} label="Manage Testimonial" />
    </>
  
  const skillsUrls =
    <>
      <NavigationItem to="/dashboard/addTestimonial" icon={MdAddCircle} label="Add Testimonial" />
      <NavigationItem to="/dashboard/manageTestimonial" icon={SiNginxproxymanager} label="Manage Testimonial" />
    </>

  const studentGallaryUrls =
    <>
      <NavigationItem to="/dashboard/manageStudentGallary" icon={SiNginxproxymanager} label="Manage Student Gallary" />
    </>

  const requestUrls =
    <>
      <NavigationItem to="/dashboard/admissionRequest" icon={FaFileWaveform} label="Admission Requests" />
      <NavigationItem to="/dashboard/seminar" icon={FaUsers} label="Seminar Requests" />
    </>

  const seminarUrls =
    <>
      <NavigationItem to="/dashboard/createSeminar" icon={MdAddCircle} label="Create Seminar" />
      <NavigationItem to="/dashboard/manageSeminar" icon={SiNginxproxymanager} label="Manage Seminar" />
    </>


  return (
    <>
      <aside
        className={`bg-gradient-to-b from-indigo-600 to-indigo-800 text-white transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-14'
          }`}
      >
        <div className="flex justify-between items-center p-4 ">
          <Link to={"/"}>
            <div className={`text-2xl font-bold ${!isSidebarOpen && 'hidden'}`}>
              Ashikur's Portfolio
            </div>
          </Link>
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none"
          >
            {isSidebarOpen ? <IoCloseCircleOutline className='text-4xl' /> : <MdMenuOpen className='text-3xl' />}
          </button>
        </div>

        <nav className="flex-1 p-4">
          <ul className={`space-y-2 pb-20 list-none ${!isSidebarOpen && 'hidden'} `}>
            {/* <NavigationItem to="/dashboard" icon={FaHome} label="Dashboard" /> */}
            <NavigationItem
              to="/dashboard"
              icon={GrDashboard}
              label="Dashboard"
            />

            <li className="mb-4">
              <NavigationItem
                to="/dashboard/services"
                icon={MdDesignServices}
                label="Services"
              />
            </li>

            <li className="mb-4">
              <NavigationItem
                to="/dashboard/projects"
                icon={MdDesignServices}
                label="Service Related Projects"
              />
            </li>

            

            <li className="mb-4">
              <NavigationItem
                to="/dashboard/skills"
                icon={SiHyperskill}
                label="Skills"
              />
            </li>

            <li className="mb-4">
              <NavigationItem
                to="/dashboard/skills-related-project"
                icon={SiHyperskill}
                label="Skill Related Projects"
              />
            </li>


            <li className="mb-4">
              <NavigationItem
                to="/dashboard/manage-stack"
                icon={BsStackOverflow}
                label="Stack Overflow"
              />
            </li>

            <li className="mb-4">
              <NavigationItem
                to="/dashboard/manage-top-project"
                icon={CiAlignTop}
                label="Top Projects"
              />
            </li>

            <li className="mb-4">
              <NavigationItem
                to="/dashboard/testimonial"
                icon={MdOutlineRateReview}
                label="Testimonials"
              />
            </li>

            

            
          </ul>
        </nav>
      </aside></>
  );
};

export default Sidebar;