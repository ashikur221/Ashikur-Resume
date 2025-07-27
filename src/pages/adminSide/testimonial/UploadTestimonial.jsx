import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { uploadImage } from '../../../uploadImg/UploadImage'; // Assuming you have an image upload utility
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const UploadTestimonial = () => {
  const [imageName, setImageName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const axiosPublic = useAxiosPublic();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageName(file.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loading spinner during the upload

    const form = e.target;
    const image = form.image.files[0];
    const name = form.name.value;
    const company = form.company.value;
    const position = form.position.value;
    const location = form.location.value;
    const testimonial = form.testimonial.value;

    // Upload image to Cloudinary
    let personImageUrl = '';
    if (image?.name) {
      personImageUrl = await uploadImage(image);
    }

    const testimonialData = {
      personImageUrl,
      name,
      company,
      position,
      location,
      testimonial,
    };

    console.log(testimonialData);
    axiosPublic.post('/testimonial', testimonialData)
      .then(res => {
        if (res.data.insertedId) {
          setIsLoading(false);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Testimonial Uploaded',
            showConfirmButton: false,
            timer: 1500,
          });
        }
        
      })
      .catch()
    form.reset();

   
  };

  return (
    <div className="flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-1/2">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Upload Testimonial</h2>
        <form onSubmit={handleSubmit}>

          {/* Image Upload Section */}
          <div className="mb-4 flex flex-col items-center">
            <label className="block border-2 border-dashed border-gray-300 w-full h-64 flex flex-col justify-center items-center cursor-pointer">
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
            {imageName && <span className="text-gray-700 mt-2 text-sm">Uploaded: {imageName}</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter name"
              name="name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
            <input
              type="text"
              id="company"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter company name"
              name="company"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="position" className="block text-sm font-medium text-gray-700">Position</label>
            <input
              type="text"
              id="position"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter position"
              name="position"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              id="location"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter location"
              name="location"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="testimonial" className="block text-sm font-medium text-gray-700">Testimonial</label>
            <textarea
              id="testimonial"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter testimonial"
              name="testimonial"
              rows={4}
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out ${isLoading ? 'cursor-not-allowed opacity-50' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Uploading...' : 'Submit Testimonial'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadTestimonial;
