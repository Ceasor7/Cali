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
    // Function to automatically transition to the next image
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Set an interval to change the image every 5 seconds (5000ms)
    const imageInterval = setInterval(nextImage, 5000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(imageInterval);
    };
  }, []);

  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <div className="text-white text-center">
          <h1 className='mt-10 font-palanquin text-4xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
            <span className="xl:whitespace-nowrap relative pr-10 text-coral-red p-2">
              Creative Arts
            </span>
            <br />
            <span className="text-coral-red inline-block pt-4">Leadership Institute</span> 
          </h1>
          <p className="text-base font-montserrat text-coral-red">
            Building a sustainable future for the arts
          </p>
          <p className="font-montserrat font-semibold text-coral-red text-base leading-8 mt-6 mb-14">
            Welcome to the Creative Arts Leadership Institute (CALI), a premier leadership development organization focused on empowering creative professionals to lead with vision, purpose, and impact.
          </p>
          <Button label="Enroll now" iconURL={arrowRight} className="mt-2" />
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 ">
        <img
          src={images[currentImageIndex]} 
          alt="Slider Image"
          className="max-h-150" 
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {/* Additional content or controls can be placed here */}
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
