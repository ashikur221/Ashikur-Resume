import React from "react";
import { Link } from "react-router-dom";

const TableComponent = ({ dataList, handleDelete }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Uploaded Data</h2>
      {dataList.length === 0 ? (
        <p className="text-gray-500">No data uploaded yet.</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">#</th>
              <th className="px-4 py-2 border-b">Image</th>
              <th className="px-4 py-2 border-b">Title</th>
              <th className="px-4 py-2 border-b">Author</th>
              <th className="px-4 py-2 border-b">Date</th>
              <th className="px-4 py-2 border-b">Category</th>
              <th className="px-4 py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dataList.map((data, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border-b">{index + 1}</td>
                <td className="px-4 py-2 border-b">
                  <img
                    src={data.stack_img_url}
                    alt={data.title}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                </td>
                <td className="px-4 py-2 border-b">{data.title}</td>
                <td className="px-4 py-2 border-b">{data.author}</td>
                <td className="px-4 py-2 border-b">{data.date}</td>
                <td className="px-4 py-2 border-b">{data.category}</td>
                <td className="px-4 py-2 border-b text-center ">
                  <div className="flex">
                    <Link to={`/dashboard/update-stack/${data._id}`}>
                      <button

                        className="mr-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      >
                        Update
                      </button>
                    </Link>

                    <button
                      onClick={() => handleDelete(data?._id)}
                      className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableComponent;
