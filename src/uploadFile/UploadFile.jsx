import axios from 'axios';

export const uploadFile = async (file) => {
  const cloudName = import.meta.env.VITE_CLOUD_NAME;

  // Check if the environment variable is set
  if (!cloudName) {
    console.error('Cloud name is not set in environment variables.');
    return '';
  }

  if (!file) {
    console.error('No file selected for upload.');
    return '';
  }

  const data = new FormData();
  data.append('file', file);
  data.append('upload_preset', 'file_preset');

  // Set resource type directly to 'raw' since you're uploading PDFs
  const resourceType = 'raw';

  try {
    // Use the correct resource type in the API URL
    const api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;
    const res = await axios.post(api, data, {
      timeout: 10000, // Optional: add timeout to avoid long-hanging requests
    });

    const { secure_url, public_id, resource_type } = res.data;

    if (!secure_url) {
      console.error('Upload failed, no secure URL returned');
      return '';
    }

    console.log('Uploaded file URL:', secure_url);
    console.log('File public ID:', public_id);
    console.log('Resource type:', resource_type);

    return secure_url;
  } catch (error) {
    // Handle potential errors
    if (error.response) {
      console.error('Error uploading the file:', error.response.data);
    } else {
      console.error('Error uploading the file:', error.message);
    }
    return '';
  }
};
