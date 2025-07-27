import React, { useState } from "react";
import { uploadImage } from "../../../uploadImg/UploadImage";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Editor } from "@tinymce/tinymce-react";
import { Helmet } from "react-helmet-async";

const UploadForm = ({refetch}) => {
  const [imageName, setImageName] = useState('');
  const axiosPublic = useAxiosPublic();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageName(file.name); // Set the image file name in state
    }
  };

  const [formData, setFormData] = useState({
    stack_img_url: "",
    title: "",
    author: "",
    date: "",
    category: "",
    description: "",
    video_url: ""
  });

  const handleDescriptionChange = (value) => {
    setFormData({ ...formData, description: value });
  };

  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.files[0];
    setLoading(true);

    let imgUrl = '';
    if (image?.name) {
      imgUrl = await uploadImage(image);
    }
    
    formData.stack_img_url = imgUrl;

    axiosPublic.post('/stack-overflow', formData)
      .then(res => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Stack Overflow Submitted",
            showConfirmButton: false,
            timer: 1500
          });
        }
        refetch();
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
    form.reset();
  };

  return (
    <div className="w-3/4 mx-auto p-4 bg-white shadow-md rounded-lg">
      <Helmet>
        <title>Dashboard | Manage Stacks</title>
      </Helmet>
      <h1 className="text-2xl font-bold mb-6 text-center">Upload Your Content</h1>

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
            <span className="text-green-600 text-2xl">+ Upload Stack Image</span>
            <span className="text-sm text-gray-500">Supported Format: png, jpg, jpeg, webp</span>
          </label>

          {/* Display the uploaded image name if available */}
          {imageName && <span className="text-gray-700 mt-2 text-sm">Uploaded: {imageName}</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
            Title:
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter title"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="author">
            Author:
          </label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Enter author name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
            Date:
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="category">
            Category:
          </label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Enter category"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
            Description:
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter description"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div> */}

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="video_url">
            Video URL:
          </label>
          <input
            type="url"
            name="video_url"
            value={formData.video_url}
            onChange={handleChange}
            placeholder="https://www.youtube.com/watch?v=example"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description */}
        <div className="p-2 w-full mb-10 h-full">
          <div className="relative">
            <label className="leading-7 text-sm font-bold text-gray-600">Blog Description</label>

            <Editor
              apiKey='skupslsqi0fmj0896sym31pgszkyl2m25468z8pp5ul8gr1r'
              init={{
                height: 500,
                max_height: "500",
                width: '100%',
                border: "0px",
                //    menubar: false,
                toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                tinycomments_mode: 'embedded',
                tinycomments_author: 'Author name',
                // mergetags_list: [
                //   { value: 'First.Name', title: 'First Name' },
                //   { value: 'Email', title: 'Email' },
                // ],
                ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
              }}
              value={formData.description}
              
              onEditorChange={handleDescriptionChange} />
          </div>

        </div>

        <button
          type="submit"
          className={`w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center justify-center space-x-2">
              <svg
                className="w-5 h-5 text-white animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                ></path>
              </svg>
              <span>Uploading...</span>
            </div>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};

export default UploadForm;
