import { useQuery } from "@tanstack/react-query";
import { FaLaravel, FaReact, FaWordpress } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const Service = () => {
    const axiosPublic = useAxiosPublic();

    const { data: services = [] } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await axiosPublic('/service');
            return res.data;
        }
    })

    // console.log(services);

    return (
        <div className="bg-black py-16 lg:px-8 text-white  bg-contain rounded-2xl">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row md:flex-row justify-between gap-5">
                    <h2 className="text-5xl font-bold text-center lg:text-start">My <span className="text-theme_primary">Service</span></h2>
                    <p className="text-xl font-medium opacity-80 lg:w-1/2 text-center lg:text-start">Building powerful, scalable web applications with the MERN stack while mentoring the next generation of developers. </p>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-16 w-10/12 mx-auto">

                    {
                        services.map(service =>
                            <div key={service._id} className="bg-white rounded-br-[100px] text-black rounded-3xl relative">
                                <h2 className="text-xl p-2 text-center">{service.serviceName}</h2>

                                {/* <hr className="" /> */}
                                <div className=" flex justify-center text-blue-950 mb-5 py-2">
                                    <div className="avatar">
                                        <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                                            <img src={`${service.serviceImageUrl}`} />
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-black p-2 rounded-full bg-cover   absolute bottom-0 right-0">
                                    <Link to={`/service/${service._id}`}>
                                        <button><GoArrowUpRight className=" text-7xl bg-theme_primary lg:p-5 rounded-full text-white"></GoArrowUpRight></button>
                                    </Link>
                                </div>

                            </div>)
                    }








                </div>

            </div>


        </div>
    );
};

export default Service;