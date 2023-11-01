import { Button } from '../components';


const ProgramsCard = ({ imgURL, title, feedback }) => {
  return (
    <div className='flex justify-center rounded-[20px] shadow-3xl p-11 items-center flex-col'>
      <div className='max-w-sm text-center font-montserrat text-base text-black'>
      <img
        src={imgURL}
        alt='programs'
        className=' rounded-3xl object-cover w-full h-auto mt-6'
      />
      <p className="mt-5 font-palanquin text-xl leading-normal font-bold">{title}</p>
      <p className='mt-6 mb-6'>{feedback}</p>
      <Button label="More Details"  />
      
      </div>
    </div>
  );
};

export default ProgramsCard;
