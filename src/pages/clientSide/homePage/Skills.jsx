import { useQuery } from "@tanstack/react-query";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { motion } from "framer-motion"

const Skills = () => {
  const axiosPublic = useAxiosPublic();

  const { data: allSkills = [] } = useQuery({
    queryKey: ['allSkills'],
    queryFn: async () => {
      const res = await axiosPublic('/skills');
      return res.data;
    }
  });

  return (
    <motion.div
     
      className="bg-black py-16 lg:px-8 text-white bg-contain rounded-2xl mb-3" >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row md:flex-row justify-between gap-5">
          <h2 className="text-5xl font-bold text-center lg:text-start">My <span className="text-theme_primary">Skills</span> Set</h2>
          <p className="text-xl font-medium opacity-80 lg:w-1/2 text-center lg:text-start">
            "Bringing Skills to Life Through Real-World Projects"
            <p> Showcasing expertise by linking every project to the skills that made it possible.</p>
          </p>
        </div>

        <section className="bg-black my-10">
          <div className="container mx-auto text-center">
            <div className="grid grid-cols-1 md:grid-cols-5 text-white gap-8">
              {allSkills.map((skill, index) => (
                <div key={index} className="group relative p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="avatar">
                      <div className="ring-primary ring-offset-base-100 w-16 rounded-full ring ring-offset-1">
                        <img src={skill?.skillImageUrl} alt={skill.name} className="size-3" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-black">{skill.name}</h3>
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div
                      className="bg-blue-400 h-2 rounded-full transition-all"
                      style={{ width: `${parseInt(skill.level)}%` }}
                    ></div>
                  </div>
                  <span className="absolute top-0 right-0 bg-blue-400 text-white text-sm px-2 py-1 rounded-bl-md transition-all group-hover:scale-110">
                    {skill.level}
                  </span>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link to={`/skill-details/${skill._id}`} className="text-white text-3xl">
                      <div className="flex flex-col justify-center items-center">
                        <div className="bg-blue-700 p-2 flex justify-center items-center text-black rounded-full">
                          <GoArrowUpRight className="text-white font-bold text-4xl" />
                        </div>
                        <p className="text-xs font-bold">Check Projects</p>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </motion.div >
  );
};

export default Skills;
