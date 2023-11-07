import { Nav } from "../components";

import {
  Footer,
  Hero,
  Subscribe,
  Programs,
  OurTeam,
  CoreValues,
  Description,
} from "../sections";

const Home = () => {
  return (
    <main className='w-screen relative overflow-hidden'>
    <Nav />
      <section className='overflow-x-hidden content-center'>
      <Hero />
    </section>
    <section className=' h-content bg-coral-red py-8'>
      <Description />
    </section>
      <section className="padding">
        <CoreValues />
      </section>   
    <section className='bg-pale-blue padding'>
      <Programs />
    </section>
    <section className='padding'>
      <OurTeam />
    </section>          
    <section className=' padding-x sm:py-32 py-16 w-full'>
      <Subscribe />
    </section>
    <section className=' bg-black padding-x padding-t pb-8'>
      <Footer />
    </section>
  </main>
  )
}

export default Home