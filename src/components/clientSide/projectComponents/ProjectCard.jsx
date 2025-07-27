import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl border p-4 md:p-6 w-[90%] sm:w-[80%] md:w-[300px] mx-auto flex flex-col justify-between h-[420px]"
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div>
        <img
          src={project.image}
          alt={project.title}
          className="rounded-xl h-40 w-full object-cover mb-4"
        />
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-gray-600 text-sm mt-2 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-3 text-xs">
          {project.tech.map((tech, i) => (
            <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-between text-sm">
        <a href={project.live} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
          Live
        </a>
        <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-600 hover:underline">
          GitHub
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
