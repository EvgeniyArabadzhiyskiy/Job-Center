import { getSalary } from 'helpers/getSalary';
import GoogleMap from 'GoogleMap/GoogleMap';
import { Link, useParams } from 'react-router-dom';

const JobDetails = ({ jobs }) => {
  const { id } = useParams();

  const job = jobs.find(item => item.id === id);

  const {
    name,
    title,
    salary,
    benefits,
    location,
    pictures,
    // description,
    employment_type,
  } = job;

  return (
    <div className="max-w-[1368px] my-0 mx-auto ">
      <div className="flex gap-[60px] max-w-[1216px] min-h-screen my-0 mx-auto ">
        <div className="w-2/3">
          <div className="flex justify-between items-center mb-[50px]">
            <h1 className="text-[28px] font-bold leading-[34px] text-[#3a4562] ">
              Job Details
            </h1>
            <ul className="flex justify-between items-center gap-[24px] mr-[50px] text-[18px] font-normal leading-[24px] text-[#3a4562]  ">
              <li className="links-item">Save Results</li>
              <li className="links-item">Share</li>
            </ul>
          </div>

          <button
            className="text-[12px] font-semibold leading-[16px] text-[#3a4562] uppercase py-[18px] px-[30px]  rounded-[8px] border-none bg-[#384564] text-[#fff] cursor-pointer"
            type="button"
          >
            Apply Now
          </button>

          <section className="flex flex-col mt-[32px] ">
            <div className="grid grid-cols-[1fr_minmax(150px,_auto)] gap-x-[20px] ">
              <h2 className="text-[24px] font-bold leading-[30px] text-[#3a4562]">
                {title}
              </h2>
              <div className="sulary-wrapper">
                <p className="text-[20px] font-bold leading-[25px] text-[#3a4562]">
                  {getSalary(salary)}
                </p>
                <p className="text-[18px] font-normal leading-[24px] text-[#3a4562] ">
                  Brutto, per year
                </p>
              </div>
            </div>

            <p className="text-[18px] font-normal leading-[24px] text-[#d25014e8] mt-[8px]">
              Posted 2 days ago
            </p>

            <div className="response">
              <h3 className="text-[20px] font-bold leading-[25px] text-[#3a4562] my-[15px] ">
                Responsobilites
              </h3>
              <p className="text-[18px] font-normal leading-[24px] text-[#3a4562] mb-[20px] ">
                Wellstar Medical Group, a physician-led multi-specialty group in
                Atlanta, Georgia, is currently recruiting for a BC/BE
                cardiothoracic surgeon to join their existing cardiovascular
                program. This is an opportunity to play a key role on a
                multidisciplinary team of cardiologists and surgeons.
              </p>

              <p className="text-[18px] font-normal leading-[24px] text-[#3a4562] mb-[20px]">
                The ideal candidate will have five or more years of experience
                in cardiac surgery. This candidate should be facile with
                off-pump revascularization, complex aortic surgery, minimally
                invasive valve and valve repair, transcatheter valve
                replacement, surgical atrial fibrillation ablation, ventricular
                assist device placement, and extra corporeal membrane
                oxygenation
              </p>

              <p className="text-[18px] font-normal leading-[24px] text-[#3a4562] mb-[20px]">
                Wellstar is one of the largest integrated healthcare systems in
                the Southeast with 11 hospitals in Atlanta metro region. With
                two open heart programs at Kennestone Regional Medical Center
                and Atlanta Medical Center, Wellstar cardiac surgeons perform
                over 1200 cardiac procedures per year. The cardiac service line
                is the only center in Georgia with the Joint Commission
                Comprehensive Cardiac Center certification.
              </p>
            </div>

            <div className="mb-[32px]">
              <h3 className="text-[20px] font-bold leading-[25px] text-[#3a4562] mb-[15px] ">
                Compensation & Benefits
              </h3>
              <p className="text-[18px] font-normal leading-[24px] text-[#3a4562]">
                Our physicians enjoy a wide range of benefits, including:
              </p>

              <ul className="text-[18px] font-normal leading-[24px] text-[#3a4562] list-[square]">
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
            className="text-[12px] font-semibold leading-[16px] text-[#3a4562] uppercase py-[18px] px-[30px]  rounded-[8px] border-none bg-[#384564] text-[#fff] cursor-pointer"
            type="button"
          >
            Apply Now
          </button>

          <section className="mt-[86px] ">
            <h2 className="text-[28px] font-semibold leading-[33px] text-[#3a4562] mb-[23px] ">
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

          <section className="mb-[107px]">
            <h2 className="text-[28px] font-bold leading-[34px] text-[#3a4562] mt-[87px] mb-[30px] ">
              Atached Images
            </h2>

            <div className="flex gap-x-[10px]">
              {pictures.map((img, idx) => (
                <img
                  className="w-[210px] h-[115px] rounded-[8px]"
                  src={img}
                  alt={name}
                  key={idx}
                />
              ))}
            </div>
          </section>
        </div>
        <section className="h-[100%] bg-[#894141] ">
          {<GoogleMap location={location} />}
        </section>
      </div>

      <Link to="/" className="text-[12px] font-semibold leading-[16px] text-[#3a4562] uppercase py-[18px] px-[30px]  rounded-[8px] border-none cursor-pointer bg-[#a1b1db4d] text-[#3a4562] ">
        Return to Job board
      </Link>
    </div>
  );
};

export default JobDetails;
