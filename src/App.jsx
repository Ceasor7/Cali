import { Nav } from "./components";
import { BrowserRouter } from 'react-router-dom';
import {
  Footer,
  Hero,
  Subscribe,
  Programs,
  OurTeam,
  CoreValues,
  Description,
} from "./sections";

const App = () => {
  return (
     <BrowserRouter>
    <main className='absolute'>
      <Nav />
      <section>
        <Hero />
      </section>
      <section className='padding-x mt-8 py-10'>
        <Description />
      </section>
        <section className="bg-pale-blue padding">
          <CoreValues />
        </section>   
      <section className='padding'>
        <Programs />
      </section>
      <section className='bg-pale-blue padding'>
        <OurTeam />
      </section>          
      <section className=' padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
      <section className=' bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
    </BrowserRouter>
  );
};

export default App;
