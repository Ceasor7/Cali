import { logoff } from "../assets/images";
import { navLinks } from "../constants";
import { useState, useRef, useEffect } from "react";

const Nav = () => {
  const [isClick, setIsClick] = useState(false);
  const menuRef = useRef(null);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  const closeNavbar = () => {
    setIsClick(false);
  };

  useEffect(() => {
    document.addEventListener("click", closeNavbar);
    return () => {
      document.removeEventListener("click", closeNavbar);
    };
  }, []);

  const handleMenuClick = (e) => {
    e.stopPropagation();
  };

  return (
    <header className="padding-x py-8 fixed top-0 left-0 right-0 bg-pale-blue z-10">
      <nav className="flex justify-between items-center max-container">
        {!isClick && ( 
          <a href="/">
            <img
              src={logoff}
              alt="logo"
              width={150}
              height={35}
              className="m-0 w-[50] h-[10]"
            />
          </a>
        )}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-black hover:bg-coral-red hover:rounded-full hover:p-2 hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="font-montserrat leading-normal text-lg text-white bg-coral-red p-2 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-400 hover:text-white duration-300">
          Contact Us
        </button>
        <div className="md:hidden flex items-center" ref={menuRef} onClick={handleMenuClick}>
          <button
            className="inline-flex items-center justify-center p-2 rounded-md text-black md:text-black hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={toggleNavbar}
          >
            {isClick ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
        {isClick && (
          <div className="md:hidden" onClick={handleMenuClick}>
            <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3 list-none">
              <li className="pb-6 font-montserrat leading-normal text-base text-black py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-coral-red border-coral-red md:hover:text-coral-red hover:rounded-full md:hover:bg-transparent">
                <a href="#home" onClick={toggleNavbar}>
                  Home
                </a>
              </li>
              <li className="pb-6 font-montserrat leading-normal text-base text-black py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-coral-red border-coral-red md:hover:text-coral-red hover:rounded-full md:hover:bg-transparent">
                <a href="#programs" onClick={toggleNavbar}>
                  Programs
                </a>
              </li>
              <li className="pb-6 font-montserrat leading-normal text-base text-black py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-coral-red border-coral-red md:hover:text-coral-red hover:rounded-full md:hover-bg-transparent">
                <a href="#products" onClick={toggleNavbar}>
                  Our Team
                </a>
              </li>
              <li className="pb-6 font-montserrat leading-normal text-base text-black py-2 px-6 text-center border-b-2 md:border-b-0 hover-bg-coral-red border-coral-red md:hover-text-coral-red hover:rounded-full md-hover-bg-transparent">
                <a href="/contact" onClick={toggleNavbar}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
