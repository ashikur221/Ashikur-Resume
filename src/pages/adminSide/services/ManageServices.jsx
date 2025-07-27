import React, { useState } from 'react';
import { uploadImage } from '../../../uploadImg/UploadImage';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import ManageServicesTable from './ManageServicesTable';
import { Helmet } from 'react-helmet-async';

const ManageServices = () => {

  const [imageName, setImageName] = useState('');
  const axiosPublic = useAxiosPublic();

  const { data: services = [], refetch } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const res = await axiosPublic.get('/service');
      return res.data;

    }
  })

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageName(file.name); // Set the image file name in state
    }
  };


  // Submit handler
  const handleSubmit = async(e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.files[0];
    const serviceName = form.service.value;
    const serviceTitle = form.title.value;
    
    // Upload image to cloudinary
    let serviceImageUrl = '';
    if (!image?.name) {
      serviceImageUrl = ''
    } else {
      serviceImageUrl = await uploadImage(image);
    }

    const data = { serviceImageUrl, serviceName, serviceTitle };
    console.log(data);
    axiosPublic.post('/service', data)
      .then(res => {
        console.log(res.data);
        if (res.data.insertedId) {
          console.log('data added');
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

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/service/${id}`)
          .then(res => {
            if (res?.data?.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Service has been deleted.",
                icon: "success"
              });
            }
            refetch();
          })
          .catch(err => {
            console.log(err);
          })

      }
    });
  }

  


  return (
    <div className=" mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <Helmet>
        <title>Dashboard | Create Service</title>
      </Helmet>
      <h2 className="text-2xl font-semibold text-center mb-6">Upload Service Image & Name</h2>
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


        {/* Text Input */}
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Service Name</span>
          </label>
          <input type="text" name='service' placeholder="Enter Service Name" className="input input-bordered" required />

        </div>


        {/* Text Input */}
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Service Title</span>
          </label>
          <input type="text" name='title' placeholder="Enter Service Name" className="input input-bordered" required />

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

      <section>
        <ManageServicesTable services={services} handleDelete={handleDelete}></ManageServicesTable>
      </section>
    </div>
  );
};

export default ManageServices;