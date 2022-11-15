import { BsFillShareFill } from 'react-icons/bs';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { getCreateDate } from '../../helpers/getCreateDate';
import { getSalary } from '../../helpers/getSalary';
import BackLink from '../BackLink/BackLink';
import GoogleMap from '../GoogleMap/GoogleMap';

interface IJob {
  title: string;
  pictures: string[];
  address: string;
  createdAt: string;
  phone: string;
  email: string;
  salary: string;
  description: string;
  employment_type: string[];
  benefits: string[];
  location: {
    lat: number;
    long: number;
  };
}

interface Props {
  job: IJob;
  jobAddress: string;
  toggleSaveIcon: boolean;

  toggleIcon: () => void;
  getAddress: (address: string) => void;
}

const JobDetails: React.FC<Props> = ({job, toggleSaveIcon, jobAddress, toggleIcon, getAddress,}) => {

  return (
    <div className="max-w-[1368px] my-0 mx-auto ">
      <div className=" pt-[24px] max-w-[1216px] min-h-screen my-0 mx-auto mb-[90px] md:flex md:gap-[60px] md:pt-[50px]  ">
        <div className="w-[100%]  px-[15px]  md:w-2/3 md:p-0">
          <div className="mb-[32px]   md:flex md:justify-between md:items-center md:mb-[50px]">
            <h1 className="font28-bold ">Job Details</h1>
            <ul className="flex items-center md:justify-between gap-[36px] mt-[35px] md:gap-[24px] md:mt-0  md:mr-[50px] text-[18px] font-normal leading-[24px] text-[#3a4562]  ">
              <li
                onClick={toggleIcon}
                className="flex-center gap-x-[10px] cursor-pointer fill-current transition-colors ease-in-out duration-500 text-[#3a4562] hover:text-[blue] "
              >
                <span>
                  {toggleSaveIcon ? <FaBookmark /> : <FaRegBookmark />}
                </span>
                <span>Save to my list</span>
              </li>
              <li className="flex-center gap-x-[10px] cursor-pointer fill-current hover-bg-color text-[#3a4562] hover:text-[blue]">
                <span>{<BsFillShareFill />}</span>
                <span>Share</span>
              </li>
            </ul>
          </div>

          <button
            className="hidden md:inline-block font12-semibold apply-btn    hover-bg-color  bg-[#384564] text-[#fff]  hover:bg-[#97a9d7b9] hover:text-[#384564]"
            type="button"
          >
            Apply Now
          </button>

          <section className="flex flex-col mt-[32px] ">
            <div className="grid items-center grid-cols-[repeat(1,1fr_minmax(150px,_auto))] grid-rows-[repeat(2,auto)]  gap-x-[20px] gap-y-[35px] md:items-start md:gap-y-0 ">
              <h2 className="col-span-2 md:col-span-1 text-[24px] font-bold leading-[30px] text-[#3a4562]">
                {job.title}
              </h2>
              <div className="order-1 md:order-none">
                <p className="font20-bold">{getSalary(job.salary)}</p>
                <p>Brutto, per year</p>
              </div>
              <p className="text-[#38415d5a] md:mt-[8px]">
                {getCreateDate(job.createdAt)}
              </p>
            </div>

            <div>
              <h3 className="font20-bold my-[15px] ">Responsobilites</h3>
              <p className="mb-[20px] ">{job.description}</p>

              <p className="mb-[20px]">{job.description}</p>

              <p className="mb-[20px]">{job.description}</p>
            </div>

            <div className="mb-[32px]">
              <h3 className="font20-bold mb-[15px] ">
                Compensation & Benefits
              </h3>
              <p className="">
                Our physicians enjoy a wide range of benefits, including:
              </p>

              <ul className="ml-[20px] md:ml-0 list-[square]">
                <li>Very competitive compensation package with bonuses</li>
                <li>Medical, Dental, and Vision Insurance</li>
                <li>Occurrence-based Malpractice Coverage</li>
                <li>
                  Short-term and Long-term Disability Insurance and life
                  insurance
                </li>
              </ul>
            </div>
          </section>

          <button
            className="block md:inline-block my-0 mx-[auto] md:m-0 font12-semibold apply-btn   hover-bg-color  bg-[#384564] text-[#fff]  hover:bg-[#97a9d7b9] hover:text-[#384564]"
            type="button"
          >
            Apply Now
          </button>

          <section className="mt-[86px] ">
            <h2 className="font28-bold mb-[23px] ">Additional Info</h2>

            <div>
              <h3 className="mb-[10px] ">Employment type</h3>
              <ul className="flex gap-x-[8px] mb-[30px]">
                {job.employment_type.map((type: string, idx: number) => (
                  <li
                    className="flex-center w-[222px] h-[50px] rounded-[8px] text-[16px] leading-[16px] bg-[#a1b1db4d] border-solid border border-[#55699e4d] "
                    key={idx}
                  >
                    {type}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-[10px]">Benefits</h3>
              <ul className="flex gap-x-[8px]">
                {job.benefits.map((benefit: string, idx: number) => (
                  <li
                    className="flex-center w-[222px] h-[50px] rounded-[8px] text-[16px] leading-[16px] bg-[#ffd00026] border-solid border border-[#ffcf00] "
                    key={idx}
                  >
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mt-[87px] mb-[63px] md:mb-0 ">
            <h2 className="font28-bold  mb-[30px] ">Atached Images</h2>

            <div className="grid gap-y-[20px] justify-items-center  items-center grid-cols-[repeat(2,1fr)] md:grid-cols-[repeat(3,1fr)] gap-x-[10px]">
              {job.pictures.map((img: string, idx: number) => (
                <img className=" rounded-[8px]" src={img} alt="job" key={idx} />
              ))}
            </div>
          </section>
        </div>
        <section className="w-[100%]  md:w-[400px]   px-[10px]">
          <h3 className="md:hidden font28-bold mb-[32px] pl-[15px] ">
            Contacts
          </h3>
          <div className=" h-[436px] rounded-[8px] overflow-hidden">
            <div className="h-[40%] bg-[#3a4562] px-[62px] pt-[31px] ">
              <p className="text-[16px] font-bold leading-[19px] text-[#E7EAF0] mb-[17px]">
                {job.address}
              </p>
              <p className="text-[16px] font-normal leading-[24px] text-[#E7EAF0]">
                {jobAddress}
              </p>
              <p className="text-[16px] font-normal leading-[24px] text-[#fff]">
                {job.phone}
              </p>
              <p className="text-[16px] font-normal leading-[24px] text-[#fff]">
                {job.email}
              </p>
            </div>
            {<GoogleMap location={job.location} getAddress={getAddress} />}
          </div>
        </section>
      </div>

      <BackLink />
    </div>
  );
};

export default JobDetails;
