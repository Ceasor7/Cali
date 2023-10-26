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
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImage]);

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  return (
    <div className="relative min-h-screen ">
      <div className="w-full min-h-screen relative">
        <img
          src={images[currentImage]}
          alt="Slider Image"
          className="w-full h-[700px] object-cover"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          <div className="text-white text-center">
          <h1 className='mt-10 font-palanquin text-4xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:whitespace-nowrap relative pr-10 bg-coral-red rounded-full p-2'>
            Creative Arts
          </span>
          <br />
          <span className='text-coral-red inline-block pt-4'>Leadership</span> Institute
        </h1>
        <p className='text-base font-montserrat text-coral-red'>
        Building a sustainable future for the arts
        </p>
        <p className='font-montserrat font-semibold text-coral-red text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
        Welcome to the Creative Arts Leadership Institute (CALI), a premier leadership development organization focused on empowering creative professionals to lead with vision, purpose, and impact.
        </p>  
        <Button label='Enroll now' iconURL={arrowRight} className="mt-2" />    
          </div>
         
        </div>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 left-4 cursor-pointer" onClick={prevImage}>
        &larr;
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer" onClick={nextImage}>
        &rarr;
      </div>
    </div>
  );
};

export default ImageSlider;