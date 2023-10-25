const DescriptionCard = ({ imgURL, label, subtext }) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16'>
      <div className='w-11 h-11 mx-auto flex rounded-full'>
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className='mt-5 font-palanquin text-center justify-center text-xl leading-normal font-bold'>
        {label}
      </h3>
      <p className='mt-3 break-words text-center justify-center font-montserrat text-base leading-normal text-black'>
        {subtext}
      </p>
    </div>
  );
};

export default DescriptionCard;
