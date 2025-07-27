import React, { useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { uploadImage } from '../../../uploadImg/UploadImage';

const UpdateProject = () => {
  window.scrollTo(0, 0);
  const [imageName, setImageName] = useState('');
  const [loading, setLoading] = useState(false); // Added loading state

  const { id } = useParams();

  const axiosPublic = useAxiosPublic();
  // get single project
  const { data: project = {}, refetch } = useQuery({
    queryKey: ['project'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/project/${id}`);
      return res.data;
    }
  })

  console.log(project);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageName(file.name); // Set the image file name in state
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.files[0];
    const title = form.title.value;
    const description = form.description.value;
    const live_link = form.live_link.value;
    const erd_link = form.erd_link.value;
    const github_link = form.github_link.value;
    const projectDoc_link = form.projectDoc_link.value;
    const apiDoc_link = form.apiDoc_link.value;
    const optionalLive_link = form.optionalLive_link.value;

    setLoading(true); // Start loading

    try {
      // upload image to cloudinary 
      let project_img_url = project?.project_img_url;
      if (!image?.name) {
        project_img_url = project?.project_img_url;
      } else {
        project_img_url = await uploadImage(image);
      }

      const projectData = { project_img_url, title, description, live_link, erd_link, github_link, projectDoc_link, apiDoc_link, optionalLive_link };


      await axiosPublic.put(`/project/${project._id}`, projectData);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Project Updated",
        showConfirmButton: false,
        timer: 1500
      });
      refetch();
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    } finally {
      setLoading(false); // End loading
    }

    form.reset();
  };

  return (
    <div className="flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Update {project.title} Project</h2>
        <form onSubmit={handleSubmit}>

          <div className="grid lg:grid-cols-3 gap-3">
            {/* Title  */}
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter title"
                name='title'
                defaultValue={project?.title}
              />
            </div>


            {/* Live Link  */}
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
              />
            </div>

            {/* ERD Link  */}
            <div className="mb-6">
              <label htmlFor="erd-link" className="block text-sm font-medium text-gray-700">
                ERD Link
              </label>
              <input
                type="text"
                id="erd-link"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter ERD link"
                name='erd_link'
                defaultValue={project?.erd_link}
              />
            </div>

            {/* Github Link  */}
            <div className="mb-6">
              <label htmlFor="github-link" className="block text-sm font-medium text-gray-700">
                Github Link
              </label>
              <input
                type="text"
                id="github-link"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter Github link"
                name='github_link'
                defaultValue={project?.github_link}
              />
            </div>


            {/* Project Documentation Link  */}
            <div className="mb-6">
              <label htmlFor="github-link" className="block text-sm font-medium text-gray-700">
                Project Documentation Link
              </label>
              <input
                type="text"
                id="projectDoc-link"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter Github link"
                name='projectDoc_link'
                defaultValue={project?.projectDoc_link}
              />
            </div>

            {/* API Documentation Link  */}
            <div className="mb-6">
              <label htmlFor="github-link" className="block text-sm font-medium text-gray-700">
                API Documentation Link
              </label>
              <input
                type="text"
                id="apiDoc-link"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter API Doc link"
                name='apiDoc_link'
                defaultValue={project?.apiDoc_link}
              />
            </div>


            {/* Optional Live Link  */}
            <div className="mb-6">
              <label htmlFor="github-link" className="block text-sm font-medium text-gray-700">
                Optional Live Link
              </label>
              <input
                type="text"
                id="optionalLive-link"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter Optional Live link"
                name='optionalLive_link'
                defaultValue={project?.optionalLive_link}
              />
            </div>



          </div>



          <div className="grid lg:grid-cols-2 gap-3">

            {/* Image  */}
            <div className="mb-4">
              {/* Image Upload Section */}
              <div className="flex flex-col items-center">

                <label className="block border-2 border-dashed border-gray-300 w-full h-64 flex flex-col justify-center items-center cursor-pointer">
                  {/* Hidden file input field */}
                  <input
                    type="file"
                    className="hidden"
                    name="image"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                  <span className="text-green-600 text-2xl">+ Upload Person's Image</span>
                  <span className="text-sm text-gray-500">Supported Format:png, jpg, jpeg, webp</span>
                </label>

                {/* Display the uploaded image name if available */}
                {imageName && (
                  <span className="text-gray-700 mt-2 text-sm">
                    Uploaded: {imageName}
                  </span>
                )}

              </div>
              <p>Already uploaded image</p>
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-24 mt-3 rounded-full ring ring-offset-2">
                  <img src={project?.project_img_url} alt="Uploaded Project" />
                </div>
              </div>
            </div>

            {/* Description  */}
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter description"
                name='description'
                defaultValue={project?.description}
                rows={9}
              />
            </div>

          </div>

          <button
            type="submit"
            className={`w-full py-2 px-4 rounded-lg text-white transition duration-150 ease-in-out ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500'
              }`}
            disabled={loading}  // Disable button during loading
          >
            {loading ? 'Updating...' : 'Update Project'}  {/* Show loading text */}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProject;
