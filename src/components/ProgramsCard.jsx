import { Button } from '../components';


const ProgramsCard = ({ imgURL, title, feedback }) => {
  return (
    <div className='flex justify-center rounded-[12px] bg-[#252525] shadow-3xl p-6 items-center flex-col'>
      <div className='max-w-sm text-center font-roboto text-base text-white'>
      <img
        src={imgURL}
        alt='programs'
        className=' rounded object-cover w-full h-auto'
      />
      <p className="mt-6 font-roboto uppercase text-3xl leading-normal font-medium">{title}</p>
      <p className='my-6'>{feedback}</p>
      {/* <Button label="More Details"  /> */}
      
      </div>
    </div>
  );
};

export default ProgramsCard;
