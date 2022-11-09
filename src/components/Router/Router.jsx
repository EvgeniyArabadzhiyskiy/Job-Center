// import JobList from 'components/JobList/JobList';
import { Route, Routes } from 'react-router-dom';

// import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { getJobList } from 'services/api';

// const BASE_URL = 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data';
// const ACCESS_TOKEN = 'access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';

const Router = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);
  console.log("Router ~ error", error);

 
  console.log('JobList ~ jobs', jobs);

  useEffect(() => {
    async function ttt() {
      try {
        setError(null);
        const  data  = await getJobList()
        setJobs(data);
      } catch (error) {
        setError(error);
      }
    } 
    ttt();
  }, []);

  return (
    <Routes>
      {/* <Route path="/" element={<JobList jobs={jobs} error={error} />} /> */}
      <Route path="/" element={<h1>HELLO</h1>} />
    </Routes>
  );
};

export default Router;
