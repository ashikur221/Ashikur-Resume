import { MdEmail } from "react-icons/md";
import { PiListStarDuotone } from "react-icons/pi";
import { MdTimer } from "react-icons/md";
import { RiShieldCheckFill } from "react-icons/ri";
import { GiStarShuriken } from "react-icons/gi";






const Discus = () => {
  return (
    <div>
      <div className="container mx-auto  text-center w-2/3 relative  space-y-5 my-12">
        <h2 className="font-bold text-5xl ">
          Have an Awsome Project <br /> Idea?{" "}
          <span className="text-theme_primary"> Let’s Discuss</span>
        </h2>
        <img
          src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725679411/React%20class/Portfolio%20Project/so0ncjl2y6almdqzdq8r.png"
          alt=""
          className="w-5 mx-auto -top-3 lg:right-44 right-7 absolute"
        />
          <div className="relative">
            <img
              className="absolute -right-5 -top-3"
              src="https://res.cloudinary.com/dqescabbl/image/upload/v1725847442/Vector_1_f2bcrf.png"
              alt=""
            />
            <p className="">
              Ready to Build Something Great Together? Let’s Talk!
            </p>
            <img
              className="absolute -bottom-3"
              src="https://res.cloudinary.com/dqescabbl/image/upload/v1725847442/Vector_1_f2bcrf.png"
              alt=""
            />
          </div>

        <div className="lg:border rounded-[60px] p-4 flex justify-between flex-col lg:flex-row  items-center w-full">
              <div className="flex lg:flex-row flex-col  items-center gap-5  lg:w-full">
                <MdEmail className="text-theme_primary bg-[#FFEAD5] p-3 text-6xl rounded-full hidden lg:flex"></MdEmail>
                <input type="email" placeholder="Enter Your Email Address" className="outline-none text-black my-5 border lg:border-0 rounded-lg p-5 lg:p-0" />
              </div>

              <div className="">
                 <button className="py-3 px-6 rounded-[60px] bg-theme_primary text-white lg:text-2xl">Send</button>
              </div>
            
        </div>

        <div className="flex flex-col lg:flex-row md:flex-row justify-between px-5 mt-8 text-xl gap-8 md:gap-2">
             <div className="flex gap-2">
                    <PiListStarDuotone className="text-black text-2xl"></PiListStarDuotone>
                    <p className="font-bold">4.9/5 Average Ratings</p>

            </div>
             <div className="flex gap-2">
                    <MdTimer className="text-black text-2xl"></MdTimer>
                    <p className="font-bold">25+ Winning Awards</p>

            </div>
             <div className="flex gap-2">
                    <RiShieldCheckFill className="text-black text-2xl"></RiShieldCheckFill>
                    <p className="font-bold">Certified Product Designer</p>

            </div>
        </div>
      </div>
      

      
    </div>
  );
};

export default Discus;
