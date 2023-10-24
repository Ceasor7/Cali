

const OurTeamCard = ({ imgURL, name, role }) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full shadow-lg rounded-md'>
      <img src={imgURL} alt={name} className='w-[282px] h-[282px]' />
      <h3 className='mt-2 text-2xl justify-center text-center leading-normal font-semibold font-palanquin'>
        {name}
      </h3>
      <p className='mt-2 font-semibold text-center justify-center font-montserrat text-coral-red text-base leading-normal'>
        {role}
      </p>
    </div>
  );
};

export default OurTeamCard;
