
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BasicMagnetCard = ({ project }) => {
  console.log(project)
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const magnetStrength = 15;
  const rotationFactor = 0.8;
  const scaleFactor = 1.01;

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const x = (clientX - centerX) / (width / 2);
    const y = (clientY - centerY) / (height / 2);

    setPosition({
      x: x * magnetStrength,
      y: y * magnetStrength,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative w-full  p-5 rounded-xl border border-[#e5eaf2] dark:border-white/20 bg-white dark:bg-white/10 backdrop-blur-lg shadow-[2px_1px_10px_rgba(0,0,0,0.1)] cursor-pointer overflow-hidden transition-colors"
      animate={{
        x: position.x,
        y: position.y,
        rotateX: position.y * rotationFactor,
        rotateY: position.x * -rotationFactor,
        scale: isHovered ? scaleFactor : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
        mass: 1,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      {/* Project Image */}
      <div className="w-full h-40 rounded-xl shadow-[0px_2px_6px_rgba(0,0,0,0.05)] overflow-hidden mb-4">
        <img
          src={project?.project_img_url}
          alt="Project Thumbnail"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Project Info */}
      <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">{project?.title}</h3>
      <p className="text-sm opacity-80 mb-4 text-gray-600 dark:text-white/80">
       
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 text-xs mb-6">
        <span className="bg-gray-100 text-gray-800 dark:bg-white/20 dark:text-white px-3 py-1 rounded-full">
          React
        </span>
        <span className="bg-gray-100 text-gray-800 dark:bg-white/20 dark:text-white px-3 py-1 rounded-full">
          Tailwind CSS
        </span>
        <span className="bg-gray-100 text-gray-800 dark:bg-white/20 dark:text-white px-3 py-1 rounded-full">
          Framer Motion
        </span>
      </div>

      {/* CTA Buttons */}
      {/* <div className="flex gap-3">
        <Link
          to={project?.live_link}
          target="_blank"
          className="flex-1 py-2 text-center bg-primary hover:bg-[#3B9DF8]/90 text-white rounded-lg text-sm font-medium transition"
        >
          Live Preview
        </Link>
        <a
          href="https://github.com/your-repo"
          target="_blank"
          className="flex-1 py-2 text-center border border-[#3B9DF8] hover:bg-indigo-50 text-[#3B9DF8] dark:hover:bg-white/10 dark:text-white dark:border-white/30 rounded-lg text-sm font-medium transition"
        >
          Code
        </a>
      </div> */}

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-inherit"
        animate={{
          opacity: isHovered ? 0.1 : 0,
          background: isHovered
            ? `radial-gradient(circle at ${50 + position.x / 2}% ${50 + position.y / 2}%, rgba(255,255,255,0.2), transparent 40%)`
            : "none",
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default BasicMagnetCard;
