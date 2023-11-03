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
    <main className='relative overflow-hidden'>
    <Nav />
    <section className='overflow-x-hidden'>
      <Hero />
    </section>
    <section className='padding-x mt-8 py-10 bg-pale-blue'>
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