import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { IJobItems } from '../../types/jobItems';
import ErrorPage from '../ErrorPage/ErrorPage';
import API from '../../services/api';
import JobDetails from '../JobDetails/JobDetails';

const JobDetailsPage: React.FC = () => {
  const { id } = useParams();
  const jobId: string = String(id);

  const [job, setJob] = useState<IJobItems | null>(null);
  const [error, setError] = useState<string>('');

  const [jobAddress, setJobAddress] = useState<string>('');
  const [toggleSaveIcon, setToggleSaveIcon] = useState<boolean>(false);

  const getAddress = (address: string): void => {
    const fullAddress = address.split(',').slice(1).join(',');

    if (!fullAddress) {
      setJobAddress('Мабуть не дуже добрі координати)))');
      return;
    }

    setJobAddress(fullAddress);
  };

  const toggleIcon = (): void => {
    setToggleSaveIcon(prev => !prev);
  };

  useEffect(() => {
    (async function () {
      try {
        setError('');
        const data = (await API.getJobItemById(jobId)) as IJobItems;
        setJob(data);
      } catch (error: any) {
        setError(error.message);
      }
    })();
  }, [jobId]);

  if (!job) {
    return null;
  }

  if (error) {
    return <ErrorPage message={error} />;
  }

  return (
    <JobDetails
      job={job}
      jobAddress={jobAddress}
      toggleSaveIcon={toggleSaveIcon}
      getAddress={getAddress}
      toggleIcon={toggleIcon}
    />
  );
};

export default JobDetailsPage;
