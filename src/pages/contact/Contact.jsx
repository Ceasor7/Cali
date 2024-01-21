import { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [capVal, setCapVal] = useState(null);
  const [showIcons, setShowIcons] = useState(false);

  const handleRecaptchaChange = (val) => {
    setCapVal(val);
    setShowIcons(val !== null);
  };

  return (
    <div className='h-screen flex flex-col items-center'>
      <h3 className='font-palanquin text-center text-4xl font-bold'>
        Contact
        <span className='text-[#cd2d00]'> Us </span>
      </h3>
      <div>
        <p className='text-center my-20 mx-4 md:mx-40 text-wrap font-semibold font-montserrat'>
          Reach out to CALI using any of our channels below. Please remember to state your name, contact information, and a clear description of how we can be of assistance. We will be glad to engage.
        </p>
      </div>
      <ReCAPTCHA
        sitekey='6LdlEFgpAAAAAIpstgTDknjMYxjxmNW13Qrt-OxN'
        onChange={handleRecaptchaChange}
      />
      {showIcons && (
        <div className="text-center justify-center mb-10">
        <div className='flex flex-row my-5'>
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
                className="w-10 h-10 ml-5 rounded-sm"
              />
            </a>
            <a href="https://x.com/Caliinstitute?t=oMH14klkkCMT8iKhHaxYCw&s=08"
            target="_blank" 
            rel="noopener noreferrer"
            className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <img
                src="/twitter.svg"
                alt="Twitter"
                className="w-10 h-10 ml-5 rounded-sm"
              />
            </a>
            <a href="https://www.linkedin.com/in/creative-arts-management-institute-cali-58b93a297/"
           rel="noopener noreferrer"
          target="_blank"
          className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <img
                src="/linkedin.svg"
                alt="LinkedIn"
                className="w-10 h-10 ml-5 rounded-sm"
              />
            </a>
          <a href="mailto:contact@cali.institute"
            target="_blank" 
            rel="noopener noreferrer"
            className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <img
                src="/mail.png"
                alt="Twitter"
                className="w-10 h-10 ml-5 rounded-sm"
              />
            </a>
        </div>        
            <div className='text-center font-semibold font-montserrat'>
              <p>Email us: contact@cali.institute</p>
            </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
