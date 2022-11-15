import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRegBookmark } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast, Zoom } from 'react-toastify';

import API from '../../services/api';
import { IJobItems } from '../../types/jobItems';
import { getCreateDate } from '../../helpers/getCreateDate';
import Stars from '../Stars/Stars';
import Pagination from '../Pagination/Pagination';
import ErrorPage from '../ErrorPage/ErrorPage';

const JobList: React.FC = () => {
  const [jobs, setJobs] = useState<IJobItems[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    (async function () {
      try {
        setError('');
        const data = (await API.getJobList()) as IJobItems[];
        setJobs(data);

        toast.success(`По вашему запросу найдено  ${data.length} вакансий`, {
          position: 'top-right',
          transition: Zoom,
        });
      } catch (error: any) {
        setError(error.message);
      }
    })();
  }, []);

  return (
    <div>
      {error && <ErrorPage message={error} />}
      {jobs.length > 0 && !error && (
        <div className="max-w-[1368px] my-0 mx-auto px-[20px] mt-[40px] ">
          <ul>
            {jobs.map(
              ({
                id,
                title,
                pictures,
                address,
                createdAt,
                name,
              }: IJobItems) => {
                return (
                  <li
                    className="grid grid-cols-[repeat(2,85px_1fr)] md:grid-cols-[3fr_1fr] md:items-center  gap-x-[30px] md:gap-y-0 gap-y-[20px]  py-[24px] px-[16px] mb-[35px] shadow-lg rounded-[8px] bg-[#fff]"
                    key={id}
                  >
                    <Link
                      to={`/details/${id}`}
                      className="flex gap-x-[30px] col-span-4 md:col-auto order-1 md:order-none"
                    >
                      <div className="min-w-[85px] h-[85px] rounded-full overflow-hidden">
                        <img
                          className="w-[85px] h-[85px] "
                          src={pictures[0]}
                          alt={name}
                        />
                      </div>

                      <div className="">
                        <h1 className="text-[20px] font-bold leading-[25px] text-[#3a4562]">
                          {title}
                        </h1>
                        <p className=" text-[16px] font-normal leading-[25px] text-[#878D9D] my-[8px]">
                          {address}
                        </p>
                        <p className="inline-flex justify-center items-center gap-x-[10px] text-[16px] font-normal leading-[25px] text-[#878D9D]">
                          <span>
                            <FaMapMarkerAlt />
                          </span>
                          <span>Vienna, Austria</span>
                        </p>
                      </div>
                    </Link>

                    <div className="flex justify-between gap-[25px] h-[100%] col-start-2 col-end-5 md:col-auto">
                      <Stars />
                      <div className="md:flex md:justify-between md:flex-col  w-[150px]">
                        <FaRegBookmark
                          size={20}
                          fill="#3a4562"
                          className="hidden md:inline-block  md:ml-[auto] "
                        />
                        <p className="text-[16px] font-normal leading-[25px] text-[#878D9D]  text-end ">
                          {getCreateDate(createdAt)}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              }
            )}
          </ul>

          <Pagination />
        </div>
      )}
      <ToastContainer autoClose={2500} theme="colored" pauseOnHover />
    </div>
  );
};

export default JobList;
