const DescriptionCard = ({ imgURL, label, subtext }) => {
  return (
    <div className='flex-1 w-full rounded-[10px] shadow-3xl px-10 py-16 bg-[#cd2d00] mb-2 '>
      <div className=' w-12 h-12 flex justify-center items-center outline outline-2 outline-white rounded-full'>
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className='mt-5 font-palanquin text-2xl leading-normal font-bold text-black'>
        {label}
      </h3>
      <p className='mt-3 break-words font-montserrat text-base leading-normal text-white'>
        {subtext}
      </p>
    </div>
    
  );
};

export default DescriptionCard;
