// import axios from 'axios';

// const BASE_URL = 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data';
// const ACCESS_TOKEN = 'access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';

// export async function getJobList() {
//   try {
//     const { data } = await axios.get(`${BASE_URL}?${ACCESS_TOKEN}`);
//     console.log("getJobList ~ data", data);
//     return data;
//   } catch (error) {}
// }


import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '26298929-dc8db63efad38f2c4177a32d6';
const OPTIONS = 'image_type=photo';

export async function getJobList() {
  const response = await axios(
    `${BASE_URL}?key=${API_KEY}&q=cat&${OPTIONS}`
  );

  return response.data;
}

// export default fetchImages;