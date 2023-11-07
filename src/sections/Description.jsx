import { services } from "../constants";
import { DescriptionCard } from "../components";

const Services = () => {
  return (
    <section className=' text-white flex justify-center flex-wrap gap-3 py-12 px-12 my-6'>
      {services.map((service) => (
        <DescriptionCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
