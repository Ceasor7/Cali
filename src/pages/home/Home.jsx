import { AnimatePresence, motion } from "framer-motion";

import {
  CoreValues,
  Description,
  Hero,
  OurTeam,
  Programs
} from "../../sections";

const Home = () => {
  return (
    <main className='relative overflow-hidden scroll-smooth'>
    <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.5 }}
      >
    <section className='overflow-x-hidden'>
      <Hero />
    </section>
    <section className=' h-content bg-[#cd7e01] py-10'>
      <Description />
    </section>
    <section className="padding">
        <CoreValues />
      </section>   
          <section className='bg-[#1e1e1e] padding'>
      <Programs />
    </section>
    <section className='padding'>
      <OurTeam />
    </section>         
    </motion.div>
    </AnimatePresence>
  </main>
  )
}

export default Home