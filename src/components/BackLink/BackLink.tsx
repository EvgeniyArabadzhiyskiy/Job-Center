import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

const BackLink: React.FC = () => {
  return (
    <Link
      to="/"
      className="inline-block font12-semibold  apply-btn   hover-bg-color  bg-[#a1b1db4d] text-[#3a4562]  hover:bg-[#3a4562] hover:text-[#fff]"
    >
      <div className="flex-center gap-x-[10px] ">
        <span>{<IoIosArrowBack size={16} />}</span>
        <span>Return to Job board</span>
      </div>
    </Link>
  );
};

export default BackLink;
