import { useState, useEffect } from 'react';
import { Button } from '../components';
import { arrowRight } from '../assets/icons';

const images = [
  {
    src: 'advocacy.jpg',
    title: 'Advocacy',
  },
  {
    src: 'mentorship.jpg',
    title: 'Mentorship',
  },
  {
    src: 'leadership.jpg',
    title: 'Leadership',
  },
  {
    src: 'training.jpg',
    title: 'Training',
  },
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
    <section
      id="home"
      className="w-full flex xl:flex-row mt-8 flex-col justify-center text-center min-h-screen gap-10 max-container"
    >
      <div className=" xl:w-2/5 flex flex-col justify-center text-center sm:ml-11 pt-28 sm:pt-0">
        <div className="text-white text-center">
          <h1 className="font-palanquin text-4xl max-sm:text-4xl max-sm:leading-9 font-bold text-black">
            <span className="whitespace-nowrap text-red p-2">Creative Arts</span>
            <br />
            <span className="text-coral-red pt-4 max-sm:text-lg">Leadership Institute</span>
          </h1>
          <p className="text-base max-sm:text-sm font-montserrat text-coral-red">
            Building a sustainable future for the arts
          </p>
          <p className="font-montserrat font-semibold text-black text-base leading-6 mt-3 mb-2">
            Welcome to the Creative Arts Leadership Institute (CALI), a premier leadership development organization focused on empowering creative professionals to lead with vision, purpose, and impact.
          </p>
          <Button label="Enroll now" iconURL={arrowRight} />
        </div>
      </div>
      <div className="relative xl:mt-10 xl:mr-10 flex-1 flex justify-center items-center pr-10 pb-0 pl-10 mt-0 sm:mt-0 sm:mb-8">
        <div className="relative">
          <img
            src={images[currentImageIndex].src}
            alt="Slider Image"
            className="h-250 rounded-2xl  sm:rounded-3xl sm:shadow-2xl"
          />
         <div className="absolute font-montserrat font-semibold text-sm bottom-4 left-1/2 transform -translate-x-1/2 w-2/5 rounded-3xl sm:pr-0 pr-10 sm:pl-0 pl-10 bg-coral-red bg-opacity-100 text-white text-center p-2">
              {images[currentImageIndex].title}
           </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
