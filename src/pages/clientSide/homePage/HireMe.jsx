import { Link } from "react-router-dom";


const HireMe = () => {
    return (
        <div className="bg-[#F2F4F7] rounded-2xl">
            <div className="container mx-auto ">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 py-16 px-12">
                    <div className="lg:w-1/2 ">
                        <div>
                            <img src="" alt="" />
                            <img src="https://res.cloudinary.com/deifi77os/image/upload/v1729520375/Portfolio/vebwsdrp9i5qc1umckcq.jpg" alt="" className="w-1/2 rounded-2xl mx-auto" />
                        </div>
                    </div>

                    <div className="space-y-8 lg:w-1/2">
                        <h2 className="text-center lg:text-start text-3xl lg:text-4xl font-medium">Why <span className="text-theme_primary">Hire me</span>?</h2>
                        <p className="  font-medium lg:text-xl text-black">
                            As a full-stack developer with deep expertise in both the MERN stack and Laravel, I bring a versatile skill set that allows me to tackle a wide range of development projects. My combination of technical expertise and hands-on teaching experience ensures that I not only deliver scalable, efficient web solutions but also understand the importance of clear communication and mentorship.
                        </p>
                        <div className="flex justify-between lg:w-2/3">
                            <div>
                                <h2 className="text-2xl font-bold text-theme_primary">8+</h2>
                                <p className="text-[#AEB6C4]">Running Project</p>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-theme_primary">10+</h2>
                                <p className="text-[#AEB6C4]">Project Completed</p>
                            </div>
                        </div>
                        <div className="text-center lg:text-start">
                            <Link to={"/contact-us"}>
                                <button className="lg:py-3 py-2 px-5 border text-white bg-theme_primary rounded-2xl lg:text-xl font-medium">Hire me</button>
                            </Link>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default HireMe;