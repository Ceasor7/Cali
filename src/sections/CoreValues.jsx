import { degree14 } from "../assets/images";
import { Button } from "../components";

const CoreValues= () => {
  return (
    <section
      id='core-values'
      className='flex justify-between items-center max-lg:flex-col gap-6 scroll-smooth '
    >
    <div className='flex-1 flex justify-center items-center pt-16 md:pt-0'>
        <img
          src={degree14}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='font-roboto capitalize text-left text-4xl lg:max-w-lg font-medium'>
          Core
          <span className='text-[#cd2d00]'> Values </span> 
        </h2>
        <p className='mt-3 break-words text-left font-montserrat text-base leading-normal text-black'>
        We strive for excellence in all aspects of our work, encouraging and supporting creative thinking and innovation. We promote diversity, equity, and inclusion in the arts, creating a welcoming and inclusive environment for all participants in our programs and initiatives. CALI believes in the power of collaboration and partnership to achieve common goals, taking responsibility for their actions and decisions and working transparently and accountability. Finally, we recognize the importance of sustainability in the arts sector and promote practices that ensure the long-term viability and resilience of the arts in Kenya.

        </p>
        <div className='mt-8'>
          <Button label='More Details' />
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
