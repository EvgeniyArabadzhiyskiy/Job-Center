import axios from 'axios';

// const BASE_URL = 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data';
const BASE_URL = 'https://637261de348e947299f40cd0.mockapi.io/jobs/data';
// const ACCESS_TOKEN = 'access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';

export async function getJobList() {
  const { data } = await axios.get(`${BASE_URL}`);
  // console.log("getJobList ~ data", data);
  return data;
}
