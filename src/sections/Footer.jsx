import { WhiteLogo } from "../assets/images";
import { FramerMagnetic } from "../components";

const Footer = () => {

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#232323] sm:px-16 px-8 pt-10 pb-8 text-white">
      <div className="flex flex-col justify-between items-start sm:items-center">
      
        <div className="flex flex-col sm:flex-row sm:space-x-20 sm:ml-36 sm:justify-between sm:items-center items-start">
          <a href="/">
            <img
              src={WhiteLogo}
              alt="logo"
              width={90}
              height={50}
              className="m-0 rounded-2xl"
            />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat sm:max-w-sm">
            Thank you for considering CALI as your partner in creative arts leadership development. We look forward to working with you to help you achieve your leadership goals and make a positive impact on the world.
          </p>
          <div className="flex items-center  gap-5 mt-8">
          <FramerMagnetic>
          <a href="https://www.facebook.com/profile.php?id=61552732195123"
          rel="noopener noreferrer"
           target="_blank"  
           className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <img
                src="/facebook.svg"
                alt="Facebook"
                className="w-10 h-10 rounded-md"
              />
            </a>
          </FramerMagnetic>
           <FramerMagnetic>
           <a href="https://instagram.com/cali.institute?igshid=MzRlODBiNWFlZA=="
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <img
                src="/instagram.svg"
                alt="Instagram"
                className="w-10 h-10 rounded-sm"
              />
            </a>
           </FramerMagnetic>
           <FramerMagnetic> 
           <a href="https://x.com/Caliinstitute?t=oMH14klkkCMT8iKhHaxYCw&s=08"
            target="_blank" 
            rel="noopener noreferrer"
            className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <img
                src="/twitter.svg"
                alt="Twitter"
                className="w-10 h-10 rounded-sm"
              />
            </a>
           </FramerMagnetic>
           <FramerMagnetic>
           <a href="https://www.linkedin.com/in/creative-arts-management-institute-cali-58b93a297/"
           rel="noopener noreferrer"
          target="_blank"
          className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <img
                src="/linkedin.svg"
                alt="LinkedIn"
                className="w-10 h-10 rounded-sm"
              />
            </a>
           </FramerMagnetic>            
            </div>
        </div>

      <div className="w-full flex flex-row justify-center mt-5 text-white text-center">
      <p className="font-montserrat">Design by Creative Age</p>
      <button
        onClick={handleScrollToTop}
        className="text-gray-300 hover:text-white focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
      </button>
      </div>
       
        {/*
         <div className="flex flex-col">
          {footerLinks.slice(0, 1).map((section) => (
            <div key={section.title}>
              <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 font-montserrat text-base leading-normal hover:text-[#cd2d00]"
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          </div>
         */}
        

        
        {/*
        <div className="flex flex-col">
          {footerLinks.slice(1, 3).map((section) => (
            <div key={section.title}>
              <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 ">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 font-montserrat text-base leading-normal hover:text-[#cd2d00]"
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
         */}
      </div>
    </footer>
  );
};

export default Footer;
