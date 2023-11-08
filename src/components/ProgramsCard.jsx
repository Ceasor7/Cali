import { Button } from '../components';


const ProgramsCard = ({ imgURL, title, feedback }) => {
  return (
    <div className='flex justify-center rounded-[12px] shadow-3xl bg-[#cd2d00] p-8 items-center flex-col'>
      <div className='max-w-sm text-center font-montserrat text-base text-black'>
      <img
        src={imgURL}
        alt='programs'
        className=' rounded object-cover w-full h-auto'
      />
      <p className="mt-6 font-roboto text-xl leading-normal font-bold">{title}</p>
      <p className='my-6'>{feedback}</p>
      <Button label="More Details"  />
      
      </div>
    </div>
  );
};

export default ProgramsCard;
