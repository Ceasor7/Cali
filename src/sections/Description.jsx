import { services } from "../constants";
import { DescriptionCard } from "../components";

const Services = () => {
  return (
    <div  id="aboutus">
    <section
     className='flex justify-center flex-wrap gap-9 py-2 px-12 my-1'>
      <div className='flex flex-col justify-center text-center gap-6'>
          <h2 className='text-4xl font-roboto font-medium text-white'>
          About <span className='text-white'> Us </span>
        </h2>
      </div>
      <div className="mt-5 grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 sm:gap-6 gap-14'">
      {services.map((service) => (
        <DescriptionCard key={service.label} {...service} />
      ))}
      </div>
     
    </section>
    </div>
   
  );
};

export default Services;
