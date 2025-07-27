import React, { useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { uploadImage } from '../../../uploadImg/UploadImage';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const UpdateServicePage = () => {

  const axiosPublic = useAxiosPublic();
  const [imageName, setImageName] = useState('');
  const { id } = useParams();


  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageName(file.name); // Set the image file name in state
    }
  };

  const { data: service = [], refetch } = useQuery({
    queryKey: ['service'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/service/${id}`);
      return res.data;

    }
  })

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.files[0];
    const serviceName = form.service.value;
    const serviceTitle = form.title.value;
    const { service: incomingUrl } = serviceName;

    // Upload image to cloudinary
    let serviceImageUrl = '';
    if (!image?.name) {
      serviceImageUrl = incomingUrl
    } else {
      serviceImageUrl = await uploadImage(image);
    }

    const data = { serviceImageUrl, serviceName, serviceTitle };
    // console.log(data);
    axiosPublic.put(`/service/${id}`, data)
      .then(res => {
        // console.log(res.data);
        if (res) {
          console.log('data added');
          toast.loading('uploading');
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Application Submitted",
            showConfirmButton: false,
            timer: 1500
          });
        }
        refetch(); // Refetch the services data to display the newly added service
      })
      .catch()
    form.reset();

  };

  console.log(service);

  return (
    <div className=" mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Update <span className="text-theme_primary">{service.serviceName}</span> Service</h2>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
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
            <span className="text-green-600 text-2xl">+ Upload Service Image</span>
            <span className="text-sm text-gray-500">Supported Format:png, jpg, jpeg, webp</span>
          </label>

          {/* Display the uploaded image name if available */}
          {imageName && (
            <span className="text-gray-700 mt-2 text-sm">
              Uploaded: {imageName}
            </span>
          )}



        </div>

        <p className="">Already Uploaded Image</p>
        <div className="avatar">
          <div className="w-24 rounded-xl">
            <img src={service.serviceImageUrl} />
          </div>
        </div>


        {/* Text Input */}
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Service Name</span>
          </label>
          <input type="text" name='service' defaultValue={service.serviceName} placeholder="Enter Service Name" className="input input-bordered" required />

        </div>


        {/* Text Input */}
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Service Title</span>
          </label>
          <input type="text" name='title' defaultValue={service.serviceTitle} placeholder="Enter Service Name" className="input input-bordered" required />

        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300"
          >
            Submit
          </button>
        </div>
      </form>


    </div>
  );
};

export default UpdateServicePage;