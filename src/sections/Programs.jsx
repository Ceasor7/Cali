import { ProgramsCard } from "../components";
import { programs } from "../constants";

const Programs = () => {
  return (
    <section
     id='programs'
     className='max-container'>
     <div className="rounded-[20px] shadow-3xl bg-white p-11">
     <h3 className='font-palanquin text-center text-4xl font-bold'>
        Our
        <span className='text-coral-red'>  Programs </span>       
      </h3>
      <p className='m-auto mt-4 max-w-lg text-center font-montserrat text-base text-black'>
      CALI offers several programs to support the development of the arts sector in Kenya. These programs include training workshops, leadership development programs, mentorship and coaching, advocacy and awareness-raising initiatives, and a research program. 

      </p>
     </div>
      

      <div className='mt-24 flex flex-1 justify-evenly items-center flex-wrap max-lg:flex-col gap-14'>
        {programs.map((review, index) => (
          <ProgramsCard
            key={index}
            feedback={review.prog}
            imgURL={review.imgURL}
            title={review.title}
          />
        ))}
      </div>
    </section>
  );
};

export default Programs;
