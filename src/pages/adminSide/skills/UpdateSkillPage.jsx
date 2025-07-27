import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { uploadImage } from '../../../uploadImg/UploadImage';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const UpdateSkillPage = () => {
  const { id } = useParams(); // Skill ID from URL
  const [imageName, setImageName] = useState('');
  const axiosPublic = useAxiosPublic();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // Fetch the skill details
  const { data: skill, isLoading: skillLoading, isError } = useQuery({
    queryKey: ['skill', id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/skills/${id}`);
      return res.data;
    }
  });

  // Mutation to update the skill
  const mutation = useMutation({
    mutationFn: async (updatedSkill) => {
      return axiosPublic.put(`/skills/${id}`, updatedSkill);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['skills']); // Invalidate skills list cache
      Swal.fire({
        icon: 'success',
        title: 'Skill Updated Successfully',
        showConfirmButton: false,
        timer: 1500,
      });
      navigate('/dashboard/skills'); // Redirect after success
    },
    onError: () => {
      Swal.fire({
        icon: 'error',
        title: 'Update Failed',
        text: 'Something went wrong. Please try again.',
      });
    },
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageName(file.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.files[0];
    const name = form.name.value;
    const level = form.level.value;

    let skillImageUrl = skill.skillImageUrl;
    if (image) {
      skillImageUrl = await uploadImage(image); // Upload image if a new one is selected
    }

    const updatedSkill = { skillImageUrl, name, level };
    mutation.mutate(updatedSkill);
  };

  if (skillLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading skill</div>;

  return (
    <>
      <Helmet>
        <title>Dashboard | Update Skill</title>
      </Helmet>
      <div className="mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Update Skill</h2>
        <form onSubmit={handleSubmit} className="space-y-6 w-1/2 mx-auto">
          {/* Image Upload Section */}
          <div className="flex flex-col items-center">
            <label className="block border-2 border-dashed border-gray-300 w-full h-64 flex flex-col justify-center items-center cursor-pointer">
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
            {skill.skillImageUrl && <span className="text-gray-700 mt-2 text-sm">Uploaded:
              <img src={skill.skillImageUrl} className="size-12 text-center" alt="" />
            </span>}
          </div>

          <div className="grid grid-cols-2 gap-3">
            {/* Skill Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Skill Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={skill.name}
                placeholder="Enter Name"
                className="input input-bordered"
                required
              />
            </div>

            {/* Skill Level */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Level of skill</span>
              </label>
              <input
                type="text"
                name="level"
                defaultValue={skill.level}
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
              disabled={mutation.isLoading}
            >
              {mutation.isLoading ? 'Updating...' : 'Update Skill'}
            </button>
          </div>

          {mutation.isLoading && (
            <div className="flex justify-center mt-4">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-600"></div>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default UpdateSkillPage;
