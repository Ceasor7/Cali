


const OurTeam = () => {
  
  return (
    
      <section id='ourteam' className='max-container max-sm:mt-12 scroll-smooth'>      
      <div className='flex flex-col justify-center text-center gap-6'>
        <h2 className='text-4xl font-roboto font-bold'>
          Our <span className='text-[#cd2d00]'> Team </span>
        </h2>
      </div>
      <div 
      className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        <div className="group relative flex flex-col shadow-lg rounded-md items-center cursor-pointer">
          <img
          src="/kevin.jpg"
          className="rounded-full border object-cover w-[290px] h-auto sm:h-auto sm:w-[290px]"
          />
          <h3 className='mt-2 text-2xl text-center leading-normal font-semibold font-roboto'> Kevin Kimani Kahuro </h3>
          <p className='mt-2 mb-4 text-center font-montserrat text-[#cd2d00] text-base leading-normal'>Chief Executive Officer</p>
        </div>
        <div className="group relative flex flex-col shadow-lg rounded-md items-center cursor-pointer">
          <img
          src="/shikuku.jpg"
          className="rounded-full border object-cover w-[290px] h-auto sm:h-auto sm:w-[290px]"
          />
          <h3 className='mt-2 text-2xl text-center leading-normal font-semibold font-roboto'> Dr. Emmanuel Shikuku </h3>
          <p className='mt-2 mb-4 text-center font-montserrat text-[#cd2d00] text-base leading-normal'>Head of Research and Training</p>
        </div>
        <div className="group relative flex flex-col shadow-lg rounded-md items-center cursor-pointer">
          <img
          src="/faith.jpg"
          className="rounded-full border object-cover w-[290px] h-auto sm:h-auto sm:w-[290px]"
          />
          <h3 className='mt-2 text-2xl text-center leading-normal font-semibold font-roboto'> Faith Mwende </h3>
          <p className='mt-2 mb-4 text-center font-montserrat text-[#cd2d00] text-base leading-normal'>Legal and advocacy</p>
        </div>
        <div className="group relative flex flex-col shadow-lg rounded-md items-center cursor-pointer">
          <img
          src="/njoroge.jpg"
          className="rounded-full border object-cover w-[290px] h-auto sm:h-auto sm:w-[290px]"
          />
          <h3 className='mt-2 text-2xl text-center leading-normal font-semibold font-roboto'>Reiner Njoroge </h3>
          <p className='mt-2 mb-4 text-center font-montserrat text-[#cd2d00] text-base leading-normal'>Admin & Research Officer</p>
        </div>
        
      </div>
      
    </section>
  
    
  );
};

export default OurTeam;
