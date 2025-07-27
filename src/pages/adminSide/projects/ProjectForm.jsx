// ProjectForm.jsx
import React, { useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { uploadImage } from '../../../uploadImg/UploadImage';

const ProjectForm = ({ refetch, services }) => {
  const [serviceId, setServiceId] = useState('');
  const [projectImgUrl, setProjectImgUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [liveLink, setLiveLink] = useState('');
  const [erdLink, setErdLink] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [projectDocLink, setProjectDocLink] = useState('');
  const [apiDocLink, setApiDocLink] = useState('');
  const [optionalLiveLink, setOptionalLiveLink] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [imageName, setImageName] = useState('');


  const axiosPublic = useAxiosPublic();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageName(file.name); // Set the image file name in state
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setIsLoading(true);
    const image = form.image.files[0];


    // Upload image to cloudinary
    let project_imgUrl = '';
    if (image?.name) {
      project_imgUrl = await uploadImage(image);
    }
    const projectData = {
      service_id: serviceId,

      project_img_url: project_imgUrl,
      title,
      description,
      live_link: liveLink,
      erd_link: erdLink,
      github_link: githubLink,
      projectDoc_link: projectDocLink,
      apiDoc_link: apiDocLink,
      optionalLive_link: optionalLiveLink,
    };

    axiosPublic.post('/project', projectData)
      .then(res => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Application Submitted",
            showConfirmButton: false,
            timer: 1500
          });
        }
        refetch();
        form.reset();
        setIsLoading(false);
      })
      .catch()
    setIsLoading(false);
    form.reset();

  };

  return (
    <div className=" flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8  w-full">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Upload New Project Data</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-3">
            {/* Service  */}
            <div className="mb-4">
              <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                Select Service
              </label>
              <select
                id="service"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
                value={serviceId}
                onChange={(e) => setServiceId(e.target.value)}
                required
              >
                <option value="" disabled>Select Service</option>
                {
                  services?.map(service =>

                    <option className='text-black' key={service._id} value={service._id}>{service.serviceName}</option>
                  )
                }

              </select>
            </div>




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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>


            {/* Live link  */}
            <div className="mb-4">
              <label htmlFor="live-link" className="block text-sm font-medium text-gray-700">
                Live Link
              </label>
              <input
                type="text"
                id="live-link"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter live link"
                value={liveLink}
                onChange={(e) => setLiveLink(e.target.value)}
                required
              />
            </div>

            {/* ERD link  */}
            <div className="mb-6">
              <label htmlFor="erd-link" className="block text-sm font-medium text-gray-700">
                ERD Link
              </label>
              <input
                type="text"
                id="erd-link"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter ERD link"
                value={erdLink}
                onChange={(e) => setErdLink(e.target.value)}
                required
              />
            </div>

            {/* Github link  */}
            <div className="mb-6">
              <label htmlFor="erd-link" className="block text-sm font-medium text-gray-700">
                Github Link
              </label>
              <input
                type="text"
                id="github-link"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter Github link"
                value={githubLink}
                onChange={(e) => setGithubLink(e.target.value)}
                required
              />
            </div>


            {/* Project Documentation link  */}
            <div className="mb-6">
              <label htmlFor="erd-link" className="block text-sm font-medium text-gray-700">
                Project Documentation Link
              </label>
              <input
                type="text"
                id="github-link"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter Project Documentation link"
                value={projectDocLink}
                onChange={(e) => setProjectDocLink(e.target.value)}
                required
              />
            </div>


            {/* API Documentation link  */}
            <div className="mb-6">
              <label htmlFor="erd-link" className="block text-sm font-medium text-gray-700">
                API Documentation Link
              </label>
              <input
                type="text"
                id="api-link"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter API Documentation link"
                value={apiDocLink}
                onChange={(e) => setApiDocLink(e.target.value)}
                required
              />
            </div>


            {/* Optional Live link  */}
            <div className="mb-6">
              <label htmlFor="erd-link" className="block text-sm font-medium text-gray-700">
                Optional Live Link
              </label>
              <input
                type="text"
                id="optional-live-link"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter Optional Live link"
                value={optionalLiveLink}
                onChange={(e) => setOptionalLiveLink(e.target.value)}
                required
              />
            </div>



          </div>

          <div className="grid lg:grid-cols-2 gap-3">
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
                <span className="text-green-600 text-2xl">+ Upload Project's Banner</span>
                <span className="text-sm text-gray-500">Supported Format: png, jpg, jpeg, webp</span>
              </label>

              {/* Display the uploaded image name if available */}
              {imageName && <span className="text-gray-700 mt-2 text-sm">Uploaded: {imageName}</span>}
            </div>

            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={9}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
            disabled={isLoading}
          >
            {isLoading ? 'Uploading...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;
