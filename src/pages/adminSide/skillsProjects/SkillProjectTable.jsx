import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const SkillProjectTable = ({ projects, handleDelete }) => {

  

  return (
    <>
      <div className=" flex items-center justify-center bg-gray-50 mt-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Skill Related Project Management</h2>
          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="min-w-full bg-white rounded-lg">
              <thead>
                <tr className="bg-blue-600 text-white text-left">
                  <th className="py-3 px-6">#</th>
                  <th className="py-3 px-6">Title</th>
                  <th className="py-3 px-6">Skill</th>

                  <th className="py-3 px-6">Live Link</th>
                  <th className="py-3 px-6">ERD Link</th>
                  <th className="py-3 px-6">Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 px-6">{index + 1}</td>
                    <td className="py-3 px-6">{project.title}</td>
                    <td className="py-3 px-6">{project.skill_name}</td>

                    <td className="py-3 px-6">
                      <Link to={project.live_link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                        Live Link
                      </Link>
                    </td>
                    <td className="py-3 px-6">
                      <Link to={project.erd_link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                        ERD Link
                      </Link>
                    </td>
                    <td className="py-3 px-6">
                      <Link to={`/dashboard/update-skill-project/${project._id}`}>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 mr-2">Edit</button>
                      </Link>
                      <button onClick={() => handleDelete(project._id)} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillProjectTable;