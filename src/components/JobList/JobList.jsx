// import axios from 'axios';
// import { useEffect } from 'react';
// import { useState } from 'react';

import { Link } from "react-router-dom";

// const BASE_URL = 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data';
// const ACCESS_TOKEN = 'access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';

const JobList = ({ jobs, error }) => {
  // const [jobs, setJobs] = useState([]);
  // const [error, setError] = useState(null);

  // console.log('JobList ~ jobs', jobs);

  // useEffect(() => {
  //   async function getProducts() {

  //     try {
  //       setError(null);
  //       const { data } = await axios.get(`${BASE_URL}?${ACCESS_TOKEN}`);
  //       setJobs(data);

  //     } catch (error) {
  //       setError(error);
  //     }
  //   }
  //   getProducts();
  // }, []);



  return (
    <div>
      <h3>JOB CENTER</h3>

      {/* <h1 className="text-3xl font-bold underline text-red-600">
        Simple React Typescript Tailwind Sample
      </h1> */}

      {error && <h1>Произошла ошибка</h1>}
      {!error && (
        <ul>
          {/* <Link to="/details" ></Link> */}
          {jobs.map(
            ({ id, title, description, pictures, name, employment_type }) => {
              return (
                <Link to={`/details/${id}`}  key={id}>
                <li className="grid grid-cols-[85px_1fr_140px] items-center gap-x-[30px] py-[24px] px-[16px] mb-[8px] border-2 border-black rounded-[8px]" >
                  <div className="self-start w-[85px] h-[85px] rounded-full overflow-hidden" >
                    <img  src={pictures[0]} alt={name}  />
                  </div>

                 <div>
                    <h1 className="text-xl" >{title}</h1>
                    <p className="my-[8px] text-[16px] leading-[25px]" >Department name • Soborniy, str. 78</p>
                    <p className="text-[16px] leading-[25px]">Vienna, Austria</p>
                 </div>

                 <div className="self-end p-[10px] ">Proshlo 2 dnia</div>

                  {/* {pictures.map((img, idx) => (
                    <img src={img} alt={img} key={idx} />
                  ))} */}
                </li>
                </Link>
              );
            }
          )}
        </ul>
      )}
    </div>
  );
};

export default JobList;


// style={{width: "100px", height: "100px"}}

// button className="border-4 bg-red mr-2   "


