import { useState, useEffect } from 'react';
import { Button } from '../components';
import { arrowRight } from '../assets/icons';
import { Link } from "react-router-dom";

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
      }, 300); 
    };
    const imageInterval = setInterval(nextImage, 4000);
    return () => {
      clearInterval(imageInterval);
    };
  }, [currentImageIndex]);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col px-12 py-14 lg:flex-row content-center max-container scroll-smooth"
    >
      <div className=" w-full pt-7 lg:w-1/2 flex flex-col mt-6 ">
        <div className="text-white">
        <h1
            className="font-roboto text-4xl font-semibold text-black"
          >
            <span
              className="text-black">Creative Arts
            </span>
            <br />
            <span
              className="text-[#cd2d00]">Leadership Institute
            </span>
          </h1>
          <p
            className="text-base max-sm:text-base font-montserrat text-black py-4"
          >
            Building a sustainable future for the arts
          </p>
          <p
            className="font-montserrat font-semibold text-black text-base leading-6 mt-2 mb-6 pb-3 pr-5"
          >
            Welcome to the Creative Arts Leadership Institute (CALI), a premier leadership development organization focused on empowering creative professionals to lead with vision, purpose, and impact.
          </p>
          
          <Link to="/contact" className='text-white bg-[#cd7e01] px-7 py-4 rounded-full'>
            Contact Us
          </Link>      
          
        </div>
      </div>
      <div
        className="w-full pt-5 lg:w-1/2 content-center"
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
            className={`absolute font-montserrat font-semibold text-sm bottom-4 left-1/2 transform -translate-x-1/2 w-2/5 rounded-2xl  bg-[#cd7e01] bg-opacity-100 text-white text-center p-2 ${fade ? 'opacity-0' : 'opacity-100'}`}
          >
            {images[currentImageIndex].title}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
