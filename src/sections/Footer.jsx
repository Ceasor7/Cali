import { LogoID } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-20">
      
        <div className="flex flex-col items-start">
          <a href="/">
            <img
              src={LogoID}
              alt="logo"
              width={50}
              height={10}
              className="m-0"
            />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white sm:max-w-sm">
            Thank you for considering CALI as your partner in creative arts leadership development. We look forward to working with you to help you achieve your leadership goals and make a positive impact on the world.
          </p>
          <div className="flex items-center gap-5 mt-8 hover:cursor-pointer">
            {socialMedia.map((icon) => (
              <div
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full hover:bg-slate-gray transition duration-300 ease-in-out"
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        
        <div className="flex flex-col">
          {footerLinks.slice(0, 1).map((section) => (
            <div key={section.title}>
              <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"
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
              <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"
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
