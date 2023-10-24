import { hamburger } from "../assets/icons";
import { logoff } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className='padding-x py-8 fixed top-0 left-0 right-0 bg-pale-blue z-10 '>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={logoff}
            alt='logo'
            width={150}
            height={35}
            className='m-0 w-[150px] h-[35px]'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-black hover:bg-coral-red hover:rounded-full hover:p-2 hover:text-white transition duration-300 ease-in-out'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
