import { useState } from 'react';

import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';

const stars: number[] = [1, 2, 3, 4, 5];

const Stars: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const handleClick = (item: number): void => {
    if (item === activeIdx) {
      setActiveIdx(0);
      return;
    }
    setActiveIdx(item);
  };
  return (
    <ul className="flex fill-current hover-bg-color text-[#3a4562] hover:text-[blue]">
      {stars.map((item, idx) => {
        return (
          <li
            className="flex-center cursor-pointer "
            key={idx}
            onClick={() => handleClick(item)}
          >
            {item <= activeIdx ? (
              <AiFillStar size={18} />
            ) : (
              <AiOutlineStar size={18} />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Stars;
