

const ProgramsCard = ({ imgURL, feedback }) => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <div className='max-w-sm text-center font-montserrat text-base text-black'>
        <p className='mt-6'>{feedback}</p>
        <img
        src={imgURL}
        alt='programs'
        className=' rounded-full object-cover w-full h-auto mt-6'
      />
      </div>
    </div>
  );
};

export default ProgramsCard;
