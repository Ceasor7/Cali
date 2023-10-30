import { useState, useEffect } from 'react';
import { Button } from '../components';
import { arrowRight } from '../assets/icons';

const images = [
  'advocacy.jpg',
  'mentorship.jpg',
  'leadership.jpg',
  'training.jpg'
];

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const imageInterval = setInterval(nextImage, 4000);
    return () => {
      clearInterval(imageInterval);
    };
  }, []);

  return (
    <section id="home" className="w-full flex xl:flex-row mt-8 flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative ml-7 xl:w-2/5 flex flex-col justify-center w-full max-xl:padding-x pt-28">
        <div className="text-white text-center">
          <h1 className='mt-1 font-palanquin text-4xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
            <span className="xl:whitespace-nowrap relative pr-10 text-black red p-2">
              Creative Arts
            </span>
            <br />
            <span className="text-coral-red inline-block pt-4">Leadership Institute</span> 
          </h1>
          <p className="text-base font-montserrat text-coral-red">
            Building a sustainable future for the arts
          </p>
          <p className="font-montserrat font-semibold text-black text-base leading-8 mt-6 mb-5">
            Welcome to the Creative Arts Leadership Institute (CALI), a premier leadership development organization focused on empowering creative professionals to lead with vision, purpose, and impact.
          </p>
          <Button label="Enroll now" iconURL={arrowRight}  />
        </div>
      </div>
      <div className="relative xl:mt-10 xl:mr-10 flex-1 flex justify-center items-center mt-12 sm:mt-0 sm:mb-8">
        <img
          src={images[currentImageIndex]} 
          alt="Slider Image"
          className="h-250 sm:h-auto rounded-3xl" 
        />
      </div>
    </section>
  );
};

export default ImageSlider;
