import { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

const buttons: string[] = ['1', '2', '3', '4', '5', '...', '20'];

const Pagination: React.FC = () => {
  const [activeBtn, setActiveIdx] = useState<string>('');

  const handleClick = (page: string) => {
    if (isNaN(Number(page))) return;

    setActiveIdx(page);
  };
  return (
    <div className="max-w-[555px]  my-0 mx-auto my-[20px] mb-[70px] px-[20px] ">
      <ul className="group is-current flex h-[50px] bg-[#ffffff] rounded-[8px] shadow-lg  ">
        <li className="pagination-btn md:mr-[84px] hover-bg-color hover:bg-[#97a9d7b9]">{<IoIosArrowBack />}</li>
        {buttons.map((item: string, idx: number) => {
          const classNames = [
            'pagination-btn font16-bold md:font20-bold active:bg-[#dcf3f8] hover-bg-color hover:bg-[#97a9d7b9]',
          ];
          if (activeBtn === item)
            classNames.push('group-[.is-current]:border-b-4 border-[#3a4562] ');
          return (
            <li
              key={idx}
              onClick={() => handleClick(item)}
              className={classNames.join(' ')}
            >
              {item}
            </li>
          );
        })}
        <li className="pagination-btn md:ml-[84px] hover-bg-color hover:bg-[#97a9d7b9]">{<IoIosArrowForward />}</li>
      </ul>
    </div>
  );
};

export default Pagination;
