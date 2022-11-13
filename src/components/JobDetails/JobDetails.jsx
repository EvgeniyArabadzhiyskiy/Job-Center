import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { BsFillShareFill } from 'react-icons/bs';
import { FaRegBookmark } from 'react-icons/fa';
import { FaBookmark } from 'react-icons/fa';

import { getJobList } from 'services/api';
import { getSalary } from 'helpers/getSalary';
import GoogleMap from 'components/GoogleMap/GoogleMap';

const JobDetails = () => {
  const { id } = useParams();

  const [toggleSaveIcon, setToggleSaveIcon] = useState(false);

  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);
  console.log('JobDetails ~ error', error);

  const job = jobs.find(item => item.id === id);

  const toggleIcon = () => {
    setToggleSaveIcon(prev => !prev);
  };

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

  if (!job) {
    return null;
  }

  const {
    name,
    title,
    salary,
    benefits,
    location,
    pictures,
    description,
    employment_type,
  } = job;

  return (
    <div className="max-w-[1368px] my-0 mx-auto ">
      <div className="bg-[#6db676] pt-[24px] max-w-[1216px] min-h-screen my-0 mx-auto mb-[90px] md:bg-[#70b9ad]  md:flex md:gap-[60px] md:pt-[50px]  ">
        <div className="w-[100%]  px-[15px]  md:w-2/3 md:p-0">
          <div className="mb-[32px]   md:flex md:justify-between md:items-center md:mb-[50px]">
            <h1 className="text-[28px] font-bold leading-[34px] text-[#3a4562] ">
              Job Details
            </h1>
            <ul className="flex items-center md:justify-between gap-[36px] mt-[35px]  md:gap-[24px] md:mt-0  md:mr-[50px] text-[18px] font-normal leading-[24px] text-[#3a4562]  ">
              <li
                onClick={toggleIcon}
                className="flex justify-center items-center gap-x-[10px] cursor-pointer"
              >
                <span>
                  {toggleSaveIcon ? <FaBookmark /> : <FaRegBookmark />}
                </span>
                <span>Save to my list</span>
              </li>
              <li className="flex justify-center items-center gap-x-[10px] cursor-pointer">
                <span>{<BsFillShareFill />}</span>
                <span>Share</span>
              </li>
            </ul>
          </div>

          <button
            className="hidden md:inline-block   text-[12px] font-semibold leading-[16px] text-[#3a4562] uppercase py-[18px] px-[30px]  rounded-[8px] border-none bg-[#384564] text-[#fff] cursor-pointer"
            type="button"
          >
            Apply Now
          </button>

          <section className="flex flex-col mt-[32px] ">
            <div className="grid items-center grid-cols-[repeat(1,1fr_minmax(150px,_auto))] grid-rows-[repeat(2,auto)]  gap-x-[20px] gap-y-[35px] md:items-start md:gap-y-0 ">
              <h2 className="col-span-2 md:col-span-1 text-[24px] font-bold leading-[30px] text-[#3a4562]">
                {title}
              </h2>
              <div className="order-1 md:order-none">
                <p className="text-[20px] font-bold leading-[25px] text-[#3a4562]">
                  {getSalary(salary)}
                </p>
                <p className="text-[18px] font-normal leading-[24px] text-[#3a4562] ">
                  Brutto, per year
                </p>
              </div>
              <p className="text-[18px] font-normal leading-[24px] text-[#d25014e8] md:mt-[8px]">
                Posted 2 days ago
              </p>
            </div>

            <div className="response">
              <h3 className="text-[20px] font-bold leading-[25px] text-[#3a4562] my-[15px] ">
                Responsobilites
              </h3>
              <p className="text-[18px] font-normal leading-[24px] text-[#3a4562] mb-[20px] ">
                {description}
              </p>

              <p className="text-[18px] font-normal leading-[24px] text-[#3a4562] mb-[20px]">
                {description}
              </p>

              <p className="text-[18px] font-normal leading-[24px] text-[#3a4562] mb-[20px]">
                {description}
              </p>
            </div>

            <div className="mb-[32px]">
              <h3 className="text-[20px] font-bold leading-[25px] text-[#3a4562] mb-[15px] ">
                Compensation & Benefits
              </h3>
              <p className="text-[18px] font-normal leading-[24px] text-[#3a4562]">
                Our physicians enjoy a wide range of benefits, including:
              </p>

              <ul className=" ml-[20px] md:ml-0  text-[18px] font-normal leading-[24px] text-[#3a4562] list-[square]">
                <li className="compensation-item">
                  Very competitive compensation package with bonuses
                </li>
                <li className="compensation-item">
                  Medical, Dental, and Vision Insurance
                </li>
                <li className="compensation-item">
                  Occurrence-based Malpractice Coverage
                </li>
                <li className="compensation-item">
                  Short-term and Long-term Disability Insurance and life
                  insurance
                </li>
              </ul>
            </div>
          </section>

          <button
            className="my-0 mx-[auto] block md:inline-block md:m-0   text-[12px] font-semibold leading-[16px] text-[#3a4562] uppercase py-[18px] px-[30px]  rounded-[8px] border-none bg-[#384564] text-[#fff] cursor-pointer"
            type="button"
          >
            Apply Now
          </button>

          <section className="mt-[86px] ">
            <h2 className="text-[28px] font-bold leading-[33px] text-[#3a4562] mb-[23px] ">
              Additional Info
            </h2>

            <div className="employment-wrapper">
              <h3 className="text-[18px] font-normal leading-[24px] text-[#3a4562] mb-[10px] ">
                Employment type
              </h3>
              <ul className="flex gap-x-[8px] mb-[30px]">
                {employment_type.map((type, idx) => (
                  <li
                    className="flex justify-center items-center w-[222px] h-[50px] rounded-[8px] text-[16px] leading-[16px] bg-[#a1b1db4d] border-solid border border-[#55699e4d] "
                    key={idx}
                  >
                    {type}
                  </li>
                ))}
              </ul>
            </div>

            <div className="benefits-wrapper">
              <h3 className="text-[18px] font-normal leading-[24px] text-[#3a4562] mb-[10px]">
                Benefits
              </h3>
              <ul className="flex gap-x-[8px]">
                {benefits.map((benefit, idx) => (
                  <li
                    className="flex justify-center items-center w-[222px] h-[50px] rounded-[8px] text-[16px] leading-[16px] bg-[#ffd00026] border-solid border border-[#ffcf00] "
                    key={idx}
                  >
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mt-[87px]">
            <h2 className="text-[28px] font-bold leading-[34px] text-[#3a4562]  mb-[30px] ">
              Atached Images
            </h2>

            <div className="grid gap-y-[20px] justify-items-center  items-center grid-cols-[repeat(2,1fr)] md:grid-cols-[repeat(3,1fr)] gap-x-[10px]">
              {pictures.map((img, idx) => (
                <img
                  className=" rounded-[8px]"
                  src={img}
                  alt={name}
                  key={idx}
                />
              ))}
            </div>
          </section>
        </div>
        <section className="w-[100%]  md:w-[400px] h-[502px] md:h-[436px]">
          <h3 className="md:hidden text-[28px] font-bold leading-[34px] text-[#3a4562] mb-[32px] pl-[15px] ">
            Contacts
          </h3>
          {<GoogleMap location={location} />}
        </section>
      </div>

      <Link
        to="/"
        className="inline-block text-[12px] font-semibold leading-[16px] text-[#3a4562] uppercase py-[18px] px-[30px]  rounded-[8px] border-none cursor-pointer bg-[#a1b1db4d] text-[#3a4562] "
      >
        Return to Job board
      </Link>
    </div>
  );
};

export default JobDetails;
