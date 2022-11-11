import JobList from 'components/JobList/JobList';
import { Route, Routes } from 'react-router-dom';

// import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { getJobList } from 'services/api';
import array from 'services/dataJobs';
import JobDetails from 'components/JobDetails/JobDetails';

  //  (async function () {
  //     try {
       
  //       const  data  = await getJobList()
  //       console.log("data", data);
        
  //     } catch (error) {
       
  //     }
  //   })() 

const Router = () => {
  // const [jobs, setJobs] = useState([]);
  // const [error, setError] = useState(null);
  // console.log("Router ~ error", error);

 const jobs = array
 const error = null

  console.log('JobList ~ jobs', jobs);

  // useEffect(() => {
  //   (async function () {
  //     try {
  //       setError(null);
  //       const  data  = await getJobList()
  //       setJobs(data);
  //     } catch (error) {
  //       setError(error);
  //     }
  //   })() 
    
  // }, []);

  return (
    <Routes>
      <Route path="/" element={<JobList jobs={jobs} error={error} />} />
      <Route path="/details/:id" element={<JobDetails jobs={jobs} />} />
      {/* <Route path="/" element={<h1>HELLO</h1>} /> */}
    </Routes>
  );
};

export default Router;
