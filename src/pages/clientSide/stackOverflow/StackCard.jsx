import React from 'react';
import { Link } from 'react-router-dom';

const StackCard = ({ stack }) => {
  return (
    <>
      {/* Blog Card */}

      <div className="border border-gray-200 shadow-lg rounded-lg overflow-hidden">
        <img
          src={stack?.stack_img_url}
          alt="Blog Cover"
          className="w-full h-48 object-cover"
        />
        <Link to={`/stack-details/${stack?._id}`}>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{stack?.title}</h3>
            <p className="text-sm text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: stack?.description.slice(0, 200) }}>
              
            </p>
            <p  className='px-2'>
            </p>
            <div className="flex justify-between items-center">

              <span className="text-sm text-blue-600 font-medium">Read More</span>

              <span className="text-xs text-gray-500">{stack?.date}</span>
            </div>
          </div>
        </Link>
      </div>

    </>
  );
};

export default StackCard;
