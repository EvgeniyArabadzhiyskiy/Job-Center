import { Route, Routes } from 'react-router-dom';

import JobList from '../JobList/JobList';
import JobDetails from '../JobDetails/JobDetails';

const Router: React.FC = () => {
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
