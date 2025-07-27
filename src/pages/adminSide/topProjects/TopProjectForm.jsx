import React, { useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { uploadImage } from '../../../uploadImg/UploadImage';


const TopProjectForm = ({ refetch, skills }) => {

  
  const [title, setTitle] = useState('');
  const [liveLink, setLiveLink] = useState('');
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
     // Include skill name in the project data
      project_img_url: project_imgUrl,
      title,
      live_link: liveLink,
    };

    console.log(projectData);

    axiosPublic.post('/top-project', projectData)
      .then(res => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Skill Related Project Submitted",
            showConfirmButton: false,
            timer: 1500
          });
        }
        refetch();
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
    form.reset();
  };


  
  return (
    <div className="flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-1/2">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Upload Top Project</h2>
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
              <span className="text-green-600 text-2xl">+ Upload Top Rated Project's Image</span>
              <span className="text-sm text-gray-500">Supported Format: png, jpg, jpeg, webp</span>
            </label>

            {/* Display the uploaded image name if available */}
            {imageName && <span className="text-gray-700 mt-2 text-sm">Uploaded: {imageName}</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Project Name
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

export default TopProjectForm;