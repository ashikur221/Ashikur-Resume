import React, { useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { uploadImage } from '../../../uploadImg/UploadImage';

const UpdateTopProjectForm = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [imageName, setImageName] = useState('');
  // To store the fetched project data

  const axiosPublic = useAxiosPublic();
  const { id } = useParams();

  // Fetch project data for update

  const { data: project = {}, refetch } = useQuery({
    queryKey: ['project'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/top-project/${id}`);
      return res.data;
    }
  })







  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageName(file.name); // Set the image file name in state
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.target;
    const image = form.image.files[0];

    const title = form.title.value;
    const live_link = form.live_link.value;

    try {
      // If a new image is selected, upload it, otherwise retain the previous one
      let project_img_url = project?.project_img_url;
      if (image) {
        project_img_url = await uploadImage(image); // Upload image if a new one is selected
      }

      const updatedProjectData = {
        project_img_url,
        title,
        live_link,

      };
      // console.log(updatedProjectData)

      await axiosPublic.put(`/top-project/${id}`, updatedProjectData);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Project Updated",
        showConfirmButton: false,
        timer: 1500
      });
      refetch();

    }

    catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    } finally {
      setIsLoading(false); // End loading
    }

    form.reset();


  };



  return (
    <div className="flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8  w-1/2">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Update Skill Related Project</h2>
        <form onSubmit={handleSubmit}>



          {/* Image Upload Section */}
          <div className="flex flex-col items-center mb-4">
            <label className="block border-2 border-dashed border-gray-300 w-full h-64 flex flex-col justify-center items-center cursor-pointer">
              <input
                type="file"
                className="hidden"
                name="image"
                accept="image/*"
                onChange={handleImageUpload}
              />
              <span className="text-green-600 text-2xl">
                {imageName ? 'Change Image' : '+ Update Project Image'}
              </span>
              <span className="text-sm text-gray-500">Supported Format: png, jpg, jpeg, webp</span>
            </label>

            {/* Display the uploaded image name or the current image */}
            {imageName ? (
              <span className="text-gray-700 mt-2 text-sm">Uploaded: {imageName}</span>
            ) : (
              <></>
            )}
            <p>Already uploaded image</p>
            <img src={project?.project_img_url} alt="Current Project" className="mt-2 size-16 object-cover rounded-lg" />
          </div>

          {/* Title */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              name='title'
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter title"
              defaultValue={project?.title}
              required
            />
          </div>

          
          {/* Live Link */}
          <div className="mb-4">
            <label htmlFor="live-link" className="block text-sm font-medium text-gray-700">
              Live Link
            </label>
            <input
              type="text"
              id="live-link"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter live link"
              name='live_link'
              defaultValue={project?.live_link}
              required
            />
          </div>

          

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
            disabled={isLoading}
          >
            {isLoading ? 'Updating...' : 'Update Project'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateTopProjectForm;