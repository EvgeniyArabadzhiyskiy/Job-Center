// import { useState } from 'react';
// import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRegBookmark } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';

// import { getJobList } from 'services/api';
import { getCreateDate } from 'helpers/getCreateDate';
import Stars from 'components/Stars/Stars';
import Pagination from 'components/Pagination/Pagination';
import array from 'services/dataJobs';

const JobList = () => {
  // const [jobs, setJobs] = useState([]);
  // const [error, setError] = useState(null);

  const jobs = array;
  const error = null

  // useEffect(() => {
  //   (async function () {
  //     try {
  //       setError(null);
  //       const data = await getJobList();
  //       setJobs(data);
  //     } catch (error) {
  //       setError(error);
  //     }
  //   })();
  // }, []);

  return (
    <div>
      {jobs.length > 0 && (
        <div className="max-w-[1368px] my-0 mx-auto px-[20px] ">
          {error && <h1>Произошла ошибка</h1>}
          {!error && (
            <ul>
              {jobs.map(({ id, title, pictures, address, createdAt, name }) => {
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
              })}
            </ul>
          )}
          <Pagination />
        </div>
      )}
    </div>
  );
};

export default JobList;
