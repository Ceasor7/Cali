import { Nav } from "../components";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

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

  const [navbarVisible, setNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldShowNavbar = scrollY === 0 || scrollY < 50;
      setNavbarVisible(shouldShowNavbar);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <main className='relative overflow-hidden scroll-smooth'>
    {navbarVisible && <Nav />}
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
          <section className='padding-x sm:py-32 py-16 w-full bg-[#dcde39]'>
      <Subscribe />
    </section>
    </motion.div>
    </AnimatePresence>
      <section className=' bg-[#232323] padding-x padding-t pb-8 text-white'>
      <Footer />
    </section>
  </main>
  )
}

export default Home