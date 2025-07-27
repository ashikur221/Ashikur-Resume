import Steps from "./Steps";

const WorkExperience = () => {
  return (
    <div className="container mx-auto  my-5">
      <p className="text-4xl font-bold text-center py-5">
        My <span className="text-theme_primary">Work Experience</span>
      </p>

      <div className="flex flex-col lg:flex-row justify-between mt-10 gap-12  w-11/12 mx-auto">
        <div className="lg:space-y-20 space-y-8 text-center lg:text-start  w-full lg:flex-1">
          <div>
            <p className="lg:text-3xl text-2xl font-bold">GTC Group, Dhaka</p>
            <p className="text-theme_primary pt-3">(IT Executive) March 2023- July 2023</p>
          </div>

          <div>
            <p className="lg:text-3xl text-2xl font-bold">Universe SoftTech, Dhaka</p>
            <p className="text-theme_primary pt-3">(MERNStack Developer) June 2024- Present</p>
          </div>

          <div>
            <p className="lg:text-3xl text-2xl font-bold">Universe IT Institute, Dhaka</p>
            <p className="text-theme_primary pt-3">(MERNStack Instructor) June 2024 - Present</p>

          </div>
        </div>

        <div className=" text-center h-full lg:block flex-1 hidden">
          <Steps></Steps>
        </div>

        <div className="lg:space-y-12 space-y-4 text-center lg:text-start flex-1 px-3 ">

          <div className="">
            <p className="lg:text-3xl text-2xl font-bold">MERN Stack Developer</p>

            <p className="text-theme_primary">
              Built and deployed multiple end-to-end applications using the MERN stack
            </p>
          </div>

          <div className="">
            <p className="lg:text-3xl text-2xl font-bold">Startup Experience: Ideo</p>
            <p className="text-theme_primary">
              Position: Full-Stack Developer | Laravel Specialist <br />
              At Ideo, I collaborate with a dynamic team to deliver high-quality Laravel-based websites to our diverse range of clients.
            </p>
          </div>
          
          <div className="">
            <p className="lg:text-3xl text-2xl font-bold">Laravel Developer</p>
            <p className="text-theme_primary">
              Integrated third-party APIs to enhance application functionality and automate business processes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
