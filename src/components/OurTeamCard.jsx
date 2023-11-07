const OurTeamCard = ({ imgURL, name, role }) => {
  return (
    <div className='flex flex-1 flex-col w-full py-7 max-sm:w-full shadow-lg rounded-md items-center'>
      <img src={imgURL} alt={name} className='w-[290px] h-[282px] rounded-full' />
      <h3 className='mt-2 text-2xl text-center leading-normal font-semibold font-roboto'>
        {name}
      </h3>
      <p className='mt-2 text-center font-montserrat text-coral-red text-xl leading-normal'>
        {role}
      </p>
    </div>
  );
};

export default OurTeamCard;
