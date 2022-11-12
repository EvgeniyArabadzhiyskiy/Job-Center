import { Route, Routes } from 'react-router-dom';

import JobList from 'components/JobList/JobList';
import JobDetails from 'components/JobDetails/JobDetails';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<JobList />} />
      <Route path="/details/:id" element={<JobDetails />} />
      <Route
        path="*"
        element={<h1 className="text-[40px] text-[red] ">Not Found</h1>}
      />
    </Routes>
  );
};

export default Router;
