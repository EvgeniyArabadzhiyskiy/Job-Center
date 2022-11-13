import { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

const buttons = ['1', '2', '3', '4', '5', '...', '20'];

const Pagination = () => {
  const [activeIdx, setActiveIdx] = useState('');

  const handleClick = page => {
    if (isNaN(page)) {
      return;
    }
    setActiveIdx(page);
  };
  return (
    <div className="w-[515px]  my-0 mx-auto my-[20px] ">
      <ul className="group is-act flex h-[50px] bg-[#ffffff] rounded-[8px] shadow-lg ">
        <li className=" first:mr-[84px] flex justify-center items-center w-[100%] text-[20px] font-bold leading-[25px] text-[#3a4562] cursor-pointer">
          {<IoIosArrowBack />}
        </li>
        {buttons.map((item, idx) => {
          const classNames = [
            'active:bg-[#dcf3f8] flex justify-center items-center w-[100%] text-[20px] font-bold leading-[25px] text-[#3a4562]  cursor-pointer',
          ];
          if (activeIdx === item)
            classNames.push('group-[.is-act]:border-b-4 border-[#3a4562] ');
          return (
            <li
              key={idx}
              disabled
              onClick={() => handleClick(item)}
              className={classNames.join(' ')}
            >
              {item}
            </li>
          );
        })}
        <li className="last:ml-[84px]  flex justify-center items-center w-[100%] text-[20px] font-bold leading-[25px] text-[#3a4562] cursor-pointer">
          {<IoIosArrowForward />}
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
