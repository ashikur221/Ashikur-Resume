import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div>
      <p className="text-4xl font-bold text-center my-10">My Top Project</p>
      <div className=" grid grid-flow-col grid-rows-2 grid-cols-3 gap-8 my-20">
        <div className="transform scale-110 -rotate-6">
          <Link to={'/serviceProjectDetails/6734db1e7af4d6e0ff9d2919'}>
            <img src="https://res.cloudinary.com/deifi77os/image/upload/v1731517213/u44f97oohqxgyuecnrhc.png" alt="" loading="lazy" className='rounded-lg shadow-lg border' />
          </Link>

        </div>
        <div className="col-start-3 transform scale-75 rotate-6 translate-x-2 translate-y-15">
          <Link to={'/serviceProjectDetails/671a7b61bc8b673595e5b2c8'}>
            <img src="https://res.cloudinary.com/deifi77os/image/upload/v1729788768/ode38t9kkrne7fcwiztb.png" alt="" loading="lazy" className='rounded-lg shadow-lg border' />
          </Link>
        </div>
        <div className="transform scale-150 translate-y-11">
          <Link to={'/serviceProjectDetails/671a7e30eaba74e418f79d97'}>
            <img src="https://res.cloudinary.com/deifi77os/image/upload/v1729789487/pbsorr4p3opksgikg3al.png" alt="" loading="lazy" className='rounded-lg shadow-lg border w-10/12' />
          </Link>
        </div>
        <div className="transform translate-y-24">
          <Link to={`/serviceProjectDetails/671a6dd824ffb9275742bafb`}>
            <img src="https://res.cloudinary.com/deifi77os/image/upload/v1729786000/y7mvzqcfgmkjkjvneqpr.png" alt="" loading="lazy" className='rounded-lg shadow-lg border' />
          </Link>
        </div>
        <div className="row-start-1 col-start-2 col-span-2 transform translate-x-20 translate-y-4">
          <Link to={`/serviceProjectDetails/671a721524ffb9275742bafc`}>
            <img src="https://res.cloudinary.com/deifi77os/image/upload/v1729786388/t6qnjs8ltrh3nsi9zalg.png" alt="" loading="lazy" className='rounded-lg shadow-lg border w-4/5' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;