import { Nav } from "../components";
import { motion, AnimatePresence } from "framer-motion";

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
    <section className='bg-[#cd7e01] padding'>
      <Programs />
    </section>
    <section className='padding'>
      <OurTeam />
    </section>          
    <section className='padding-x sm:py-32 py-16 w-full'>
      <Subscribe />
    </section>
    </motion.div>
    </AnimatePresence>
    <section className=' bg-[#dcde39] padding-x padding-t pb-8'>
      <Footer />
    </section>
  </main>
  )
}

export default Home