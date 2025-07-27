import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { uploadImage } from '../../../uploadImg/UploadImage';

const TestimonialUpdateForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [imageName, setImageName] = useState('');

  const { id } = useParams();
  const axiosPublic = useAxiosPublic();

  const { data: selectedTestimonial = {}, refetch } = useQuery({
    queryKey: ['testimonials'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/testimonial/${id}`);
      return res.data;
    }
  })

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageName(file.name); // Set the image file name in state
    }
  };

  // Handle form submission using event.target to extract form field values
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.target;
    const image = form.image.files[0];
    const name = form.name.value;
    const company = form.company.value;
    const position = form.position.value;
    const location = form.location.value;
    const testimonial = form.testimonial.value;

    try {
      // upload image to cloudinary 
      let personImageUrl = '';
      if (!image?.name) {
        personImageUrl = '';
      } else {
        personImageUrl = await uploadImage(image);
      }

      const testimonialData = { personImageUrl, name, company, position, location, testimonial };

      console.log(testimonialData);

      await axiosPublic.put(`/testimonial/${selectedTestimonial._id}`, testimonialData);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Testimonial Updated",
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
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Update Testimonial</h2>
        <form onSubmit={handleSubmit}>
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
                <img src={selectedTestimonial?.personImageUrl} alt="Uploaded Project" />
              </div>
            </div>
          </div>

          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={selectedTestimonial.name} // Show data from database
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Company */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              defaultValue={selectedTestimonial.company} // Show data from database
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Position */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="position">
              Position
            </label>
            <input
              type="text"
              id="position"
              name="position"
              defaultValue={selectedTestimonial.position} // Show data from database
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Location */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              defaultValue={selectedTestimonial.location} // Show data from database
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Testimonial */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="testimonial">
              Testimonial
            </label>
            <textarea
              id="testimonial"
              name="testimonial"
              defaultValue={selectedTestimonial.testimonial} // Show data from database
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="4"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
              disabled={isLoading}
            >
              {isLoading ? 'Updating...' : 'Update Testimonial'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TestimonialUpdateForm;
