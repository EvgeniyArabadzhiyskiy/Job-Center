// import axios from 'axios';
// import { useEffect } from 'react';
// import { useState } from 'react';

// const BASE_URL = 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data';
// const ACCESS_TOKEN = 'access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';

const JobList = ({jobs, error}) => {
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

      <h1>JOB CENTER</h1>

      {error && <h1>Произошла ошибка</h1>}
      {!error && (
        <ul>
          {jobs.map(({ id, title, description, pictures, name, employment_type }) => {
            return (
              <li key={id}>
                <img src={pictures[0]} alt={name} />
                
                <h3>{title}</h3>
                <p>{description}</p>

              {employment_type.map(type=>  <button key={type}>{type}</button>)}
              {pictures.map((img, idx) =>  <img src={img} alt={img} key={idx}/>)}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default JobList;
