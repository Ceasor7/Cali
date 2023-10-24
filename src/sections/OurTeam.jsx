import { teams } from "../constants";
import { OurTeamCard } from "../components";

const OurTeam = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-center text-center gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>
          Our <span className='text-coral-red'> Team </span>
        </h2>
      </div>
      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        {teams.map((team) => (
          <OurTeamCard key={team.name} {...team} />
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
