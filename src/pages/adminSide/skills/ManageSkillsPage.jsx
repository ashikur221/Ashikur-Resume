import React, { useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { uploadImage } from '../../../uploadImg/UploadImage';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import SkillsTable from './SkillsTable';

const ManageSkillsPage = () => {
  const [imageName, setImageName] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const axiosPublic = useAxiosPublic();

  // get all skills 
  const { data: skills = [], refetch } = useQuery({
    queryKey: ['skills'],
    queryFn: async () => {
      const res = await axiosPublic.get('/skills');
      return res.data;
    }
  });

  

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageName(file.name); // Set the image file name in state
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true
    const form = e.target;
    const image = form.image.files[0];
    const name = form.name.value;
    const level = form.level.value;

    // Upload image to cloudinary
    let skillImageUrl = '';
    if (!image?.name) {
      skillImageUrl = '';
    } else {
      skillImageUrl = await uploadImage(image);
    }

    const data = { skillImageUrl, name, level };
    axiosPublic.post('/skills', data)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Skill Added',
            showConfirmButton: false,
            timer: 1500,
          });
        }
        refetch();
        setIsLoading(false); // Set loading state to false after success
      })
      .catch(() => {
        setIsLoading(false); // Set loading state to false on error
      });

    form.reset();
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/skills/${id}`)
          .then((res) => {
            if (res?.data?.deletedCount) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Skill has been deleted.',
                icon: 'success',
              });
            }
            refetch();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  return (
    <>
      <div className="mx-auto p-6 bg-white shadow-md rounded-lg">
        <Helmet>
          <title>Dashboard | Add Skills</title>
        </Helmet>
        <h2 className="text-2xl font-semibold text-center mb-6">Upload Skill Data</h2>
        <form onSubmit={handleSubmit} className="space-y-6 w-1/2 mx-auto">
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
              <span className="text-green-600 text-2xl">+ Upload Skill's Image</span>
              <span className="text-sm text-gray-500">Supported Format: png, jpg, jpeg, webp</span>
            </label>

            {/* Display the uploaded image name if available */}
            {imageName && <span className="text-gray-700 mt-2 text-sm">Uploaded: {imageName}</span>}
          </div>

          <div className="grid grid-cols-2 gap-3">
            {/* name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Skill Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                className="input input-bordered"
                required
              />
            </div>

            {/* level */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Level of skill</span>
              </label>
              <input
                type="text"
                name="level"
                placeholder="Enter level of your skill"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300"
              disabled={isLoading}
            >
              {isLoading ? 'Uploading...' : 'Submit'}
            </button>
          </div>

          {/* Loading Spinner */}
          {isLoading && (
            <div className="flex justify-center mt-4">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-600"></div>
            </div>
          )}
        </form>
      </div>

      <SkillsTable skills={skills} handleDelete={handleDelete}></SkillsTable>
    </>
  );
};

export default ManageSkillsPage;
