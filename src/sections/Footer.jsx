import { WhiteLogo } from "../assets/images";
import { FramerMagnetic } from "../components";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-[#232323] padding-x padding-t pb-8 text-white">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-20 ">
      
        <div className="flex flex-col items-start">
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
          <div className="flex items-center gap-5 mt-8">
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
      </div>
    </footer>
  );
};

export default Footer;
