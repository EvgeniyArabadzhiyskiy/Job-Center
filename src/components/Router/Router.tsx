import { Route, Routes } from 'react-router-dom';
import JobDetailsPage from '../JobDetailsPage/JobDetailsPage';

import JobList from '../JobList/JobList';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<JobList />} />
      <Route path="/details/:id" element={<JobDetailsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
