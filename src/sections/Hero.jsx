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
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const nextImage = () => {
      setFade(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(false);
      }, 100);
    };
    const imageInterval = setInterval(nextImage, 4000);
    return () => {
      clearInterval(imageInterval);
    };
  }, [currentImageIndex]);

  return (
    <section
      id="home"
      className="flex flex-col px-12 py-24 mt-32 lg:flex-row content-center"
    >
      <div
        className="w-full lg:w-1/2 flex-wrap content-center"
      >
        <div
          className=""
        >
          <h1
            className="font-roboto text-4xl font-semibold text-black"
          >
            <span
              className="text-black">Creative Arts
            </span>
            <br />
            <span
              className="text-coral-red">Leadership Institute
            </span>
          </h1>
          <p
            className="text-base max-sm:text-base font-montserrat text-black py-4"
          >
            Building a sustainable future for the arts
          </p>
          <p
            className="font-roboto font-semibold text-slate-700 text-base leading-6 mt-3 mb-2 pb-6 pr-5"
          >
            Welcome to the Creative Arts Leadership Institute (CALI), a premier leadership development organization focused on empowering creative professionals to lead with vision, purpose, and impact.
          </p>
          <Button label="Enroll now" iconURL={arrowRight} />
        </div>
      </div>
      <div
        className="w-full lg:w-1/2 content-center"
      >
        <div
          className="relative"
        >
          <img
            src={images[currentImageIndex].src}
            alt="Slider Image"
            className={`rounded h-250 transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}
          />
          <div
            className={`absolute font-montserrat font-semibold text-sm bottom-4 left-1/2 transform -translate-x-1/2 w-2/5 rounded-2xl  bg-coral-red bg-opacity-100 text-white text-center p-2 ${fade ? 'opacity-0' : 'opacity-100'}`}
          >
            {images[currentImageIndex].title}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
