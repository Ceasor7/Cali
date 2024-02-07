
const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#232323]">
    <div className="py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center justify-center">
            <img src="/WhiteLogo.png" alt="Logo" className="h-16" />
          </div>
          <div>
            <p className="text-white text-center font-montserrat">
            Thank you for considering CALI as your partner in creative arts leadership development. We look forward to working with you to help you achieve your leadership goals and make a positive impact on the world.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex gap-4">
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
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="w-full bg-[#1a1818] p-5 flex flex-row justify-center mt-5 text-white text-center">
      <a href="https://creativeage.agency/"
            target="_blank" 
            rel="noopener noreferrer"
            className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 sm:mr-3">
             <p className="font-montserrat">Design by Creative Age</p>
      </a>
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
    </footer>
  );
};

export default Footer;
