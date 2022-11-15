import axios from 'axios';
import { IJobItems } from '../types/jobItems';

const BASE_URL = 'https://637261de348e947299f40cd0.mockapi.io/jobs/data';

interface IResultLisrt {
  data: IJobItems[];
}

interface IResultItem {
  data: IJobItems;
}

const API = {
  async getJobList() {
    const result = (await axios.get(`${BASE_URL}`)) as IResultLisrt;
    return result.data;
  },

  async getJobItemById(id: string) {
    const result = (await axios.get(`${BASE_URL}/${id}`)) as IResultItem;
    return result.data;
  },
};

export default API;
