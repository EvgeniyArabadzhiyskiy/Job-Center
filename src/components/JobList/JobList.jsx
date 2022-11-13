import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getJobList } from 'services/api';
import Stars from 'components/Stars/Stars';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        setError(null);
        const data = await getJobList();
        setJobs(data);
      } catch (error) {
        setError(error);
      }
    })();
  }, []);

  return (
    <div>
      {jobs.length > 0 && (
        <div className="max-w-[1368px] my-0 mx-auto px-[20px] " >
          {error && <h1>Произошла ошибка</h1>}
          {!error && (
            <ul>
              {jobs.map(({ id, title, pictures, address, name }) => {
                return (
                  <li
                    className="grid grid-cols-[repeat(2,85px_1fr)] md:grid-cols-[3fr_1fr] md:items-center  gap-x-[30px] md:gap-y-0 gap-y-[20px]  py-[24px] px-[16px] mb-[8px] border-2 border-black rounded-[8px] bg-[#EFF0F5]"
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
                        <p className="text-[16px] font-normal leading-[25px] text-[#878D9D]">
                          Vienna, Austria
                        </p>
                      </div>
                    </Link>

                    <div className="flex justify-between gap-[25px] h-[100%] col-start-2 col-end-5 md:col-auto">
                      <Stars />
                      <p className="text-[16px] font-normal leading-[25px] text-[#878D9D] self-end w-[140px] text-end ">
                        Posted 2 day ago
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default JobList;
