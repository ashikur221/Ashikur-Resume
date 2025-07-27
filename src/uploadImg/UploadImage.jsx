import axios from "axios";

export const uploadImage = async (file) => {
  const cloudName = import.meta.env.VITE_CLOUD_NAME
  const data = new FormData();
  data.append('file', file)
  data.append('upload_preset', 'portfolio_present')
  try {
    let api = `https://api.cloudinary.com/v1_1/deifi77os/auto/upload`;
    const res = await axios.post(api, data)

    const { secure_url } = res.data;
    console.log(secure_url);
    return secure_url
  } catch (error) {
    console.log(error);
    return ''
  }
}