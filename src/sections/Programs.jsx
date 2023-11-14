import { ProgramsCard } from "../components";
import { programs } from "../constants";

const Programs = () => {
  return (
    <section
      id='programs'
      className='max-container'>
      <div className="py-8">
        <h3 className='font-roboto text-white text-center text-4xl font-medium'>
          Our
          <span className='text-white'> Programs </span>
        </h3>
        <p className='m-auto mt-4 max-w-lg text-center font-roboto text-base text-white'>
          CALI offers several programs to support the development of the arts sector in Kenya. These programs include training workshops, leadership development programs, mentorship and coaching, advocacy and awareness-raising initiatives, and a research program.

        </p>
      </div>


      <div className='mt-8 flex flex-1 justify-center items-center flex-wrap lg:flex-row gap-8'>
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
