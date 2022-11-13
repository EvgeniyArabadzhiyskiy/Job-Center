import { useState } from 'react';

import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';

const stars = [1, 2, 3, 4, 5];

const Stars = () => {
  const [activeIdx, setActiveIdx] = useState(-1);

  const handleClick = idx => {
    if (idx === activeIdx) {
      setActiveIdx(-1);
      return;
    }
    setActiveIdx(idx);
  };
  return (
    <>
      <ul className="flex">
        {stars.map((item, idx) => {
          return (
            <li
              className="flex items-center justify-center"
              key={idx}
              onClick={() => handleClick(idx)}
            >
              {idx <= activeIdx ? (
                <AiFillStar size={18} fill={'#3a4562'} />
              ) : (
                <AiOutlineStar size={18} fill="#3a4562" />
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Stars;
