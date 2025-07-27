
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare, FaWhatsappSquare, FaYoutubeSquare } from 'react-icons/fa'
import { GoArrowUpRight } from 'react-icons/go'
import { IoSend } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <footer className=" bg-black text-white p-10">

                <div className="lg:flex space-y-2 justify-between items-center mt-8 w-full">
                    <p className='lg:text-5xl text-3xl  font-bold'>Let&apos;s Connect There</p>
                    <Link to={"/contact-us"}>
                        <button className='bg-theme_primary px-5 lg:py-3 rounded-2xl p-1 lg:text-2xl flex items-center gap-2'>Hire Me <GoArrowUpRight /></button>
                    </Link>
                </div>

                <div className="border border-white w-full opacity-30 mt-16 mb-8"></div>

                <div className='lg:flex gap-5 space-y-5'>
                    <div className=' lg:w-1/3  space-y-5'>
                        <div className="flex items-center gap-3 ">
                            <img src="https://res.cloudinary.com/deifi77os/image/upload/v1726680899/Portfolio/dylum9u4vdxunqttctma.png"
                                        type="image/x-icon" className="w-12 bg-theme_primary p-2 rounded-full" alt="" />
                            <span className="font-bold text-2xl">ASHIKUR RAHMAN</span>
                        </div>
                        <p>
                            As a MERN Stack Developer, I specialize in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. My experience spans developing dynamic, scalable, and responsive web solutions that cater to various business needs. I have expertise in integrating frontend user experiences with backend functionality, ensuring efficient database management and seamless API connections.
                        </p>
                        <div className='flex text-2xl gap-1'>
                            <FaFacebookSquare />
                            <FaYoutubeSquare />
                            <FaInstagramSquare />
                            <FaTwitterSquare />
                            <FaWhatsappSquare />
                            <FaLinkedin />

                        </div>
                    </div>

                    <div className=' lg:w-1/3 flex justify-evenly'>
                        <div className="">
                            <p className='text-theme_primary font-bold text-xl mb-3'>Navigation</p>
                            <ul className='space-y-1'>
                                <Link to="/"><li>Home</li></Link>
                                <Link to="/about"><li>About</li></Link>
                                <Link to="/stack-overflow"><li>Stack Overflow</li></Link>
                                <Link to="/stack-overflow"><li>CV</li></Link>
                                <li>Resume</li>
                                <li>Project</li>
                            </ul>
                        </div>
                        <div className="">
                            <p className='text-theme_primary font-bold text-xl mb-3'>Contact</p>
                            <ul className='space-y-1'>
                                <li>+880 1755450127</li>
                                <li>ashikur1602@gmail.com</li>
                               
                            </ul>
                        </div>
                    </div>
                    <div className=' lg:w-1/3'>
                        <div className="">
                            <p className='text-theme_primary font-bold text-xl mb-3'>Get latest information</p>

                            <div className='flex'>
                                <label className="input input-bordered rounded-r-none flex items-center gap-2">
                                    <input type="text" className="grow" placeholder="Search" />
                                </label>
                                <div className='bg-theme_primary p-3 items-center flex text-2xl rounded-r-lg'><IoSend /></div>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </div>
    )
}

export default Footer