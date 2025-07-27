import { useState } from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion"
import { SlideDown, SlideUp } from "../../assets/animate";

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);


    const mobileLinks = [
        { 'name': "Home", "link": "/" },
        { 'name': "About", "link": "/about" },
        { 'name': "Stack Overflow", "link": "/stack-overflow" },
        { 'name': "My CV", "link": "https://drive.google.com/file/d/1McooBW_qjrTudp97BWw-D6vcESTS60jG/view" },
        { 'name': "My Projects", "link": "/project" },
        { 'name': "Contact Me", "link": "/contact-us" },

    ]

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const closeDrawerOnNavigate = () => {
        setIsDrawerOpen(false);
    };

    return (
        <div
           
        >
            {/* Mobile view */}
            <div className="lg:hidden">
                <div className="dropdown relative">
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={handleDrawerToggle}
                        className="btn btn-ghost lg:hidden flex gap-24 items-center">
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-black"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>

                        <Link to="/" className="flex items-center gap-3">
                            <img
                                src="https://res.cloudinary.com/deifi77os/image/upload/v1726680899/Portfolio/dylum9u4vdxunqttctma.png"
                                alt="Logo"
                                className="w-8" />
                            <span className="font-bold text-2xl text-black">Ashikur</span>
                        </Link>
                    </div>

                    {/* Drawer Menu */}
                    <div
                        className={`absolute inset-0 top-[60px] -left-10 h-screen bg-black text-white transform ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"
                            } transition-transform duration-500 z-50`}>
                        <ul className="flex flex-col justify-center items-center mt-20">
                            {mobileLinks.map((link, index) => (
                                <li key={index} className="my-4">
                                    <Link
                                        to={`${link?.link}`}
                                        onClick={closeDrawerOnNavigate}
                                        className="text-lg py-3 px-8 rounded-3xl hover:bg-theme_orange duration-300">
                                        {link?.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Desktop view */}
            <div className=" hidden lg:flex ">
                <div className=' container mx-auto'>
                    <section className="navigation">
                        <div className="flex items-center justify-between gap-2 py-2 mt-5 rounded-[50px] px-2 bg-black text-white font-bold">

                            <div className="flex">
                                <div className="buttons">
                                    <Link to={"/"}>
                                        <button
                                            className="text-white hover:bg-theme_orange duration-300 py-3 px-8 hover:font-bold  rounded-3xl">Home</button>
                                    </Link>
                                </div>
                                <div className="buttons">
                                    <Link to={"/about"}>
                                        <button
                                            className="text-white hover:bg-theme_orange duration-300 py-3 px-8 hover:font-bold  rounded-3xl">About</button>
                                    </Link>
                                </div>

                                <div className="buttons">
                                    <Link to={"/stack-overflow"}>
                                        <button
                                            className="text-white hover:bg-theme_orange duration-300 py-3 px-8 hover:font-bold  rounded-3xl">Stack Overflow</button>
                                    </Link>
                                </div>
                            </div>


                            <Link to={"/"}>
                                <div className="flex items-center gap-3 ">
                                    <img src="https://res.cloudinary.com/deifi77os/image/upload/v1726680899/Portfolio/dylum9u4vdxunqttctma.png"
                                        type="image/x-icon" className="w-12 bg-theme_primary p-2 rounded-full" alt="" />
                                    <span className="font-bold text-2xl uppercase">Ashikur</span>
                                </div>
                            </Link>


                            <div className="flex">
                                <div className="buttons">
                                    <Link to={"https://drive.google.com/file/d/1McooBW_qjrTudp97BWw-D6vcESTS60jG/view?usp=sharing"} target="_blank">
                                        <button
                                            className="text-white hover:bg-theme_orange duration-300 py-3 px-8  hover:font-bold  rounded-3xl">My CV</button>
                                    </Link>
                                </div>
                                <div className="buttons">
                                    <Link to={"/project"}>
                                        <button
                                            className="text-white hover:bg-theme_orange duration-300 py-3 px-8  hover:font-bold  rounded-3xl">Project</button>
                                    </Link>
                                </div>

                                <div className="buttons">
                                    <Link to={"/contact-us"}>
                                        <button
                                            className="text-white hover:bg-theme_orange duration-300 py-3 px-8  hover:font-bold  rounded-3xl">Contact</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>


        </div >
    );
};

export default Navbar;
