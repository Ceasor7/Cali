//import emailjs from 'emailjs-com';
//import { useRef, useState } from 'react';
//import { toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { SocialIcon } from 'react-social-icons';



const Contact = () => {
  const [capVal, setCapVal] = useState(null)

  const [isTextVisible, setIsTextVisible] = useState(false);

  const handleClick = () => {
    setIsTextVisible(!isTextVisible);
  };


 {/*
  const form = useRef();
  const {isLoading, setIsLoading} = useState(false)

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_zf8zxfa', 'template_t4j6rw6', form.current, 'ExgvEE7Vv3Uf7xor_')
    .then((result) => {
      console.log(result.text);
      toast.success("Message sent successfully")
  }, (error) => {
      console.log(error.text);
      toast.error("Error sending message")
  }
)
.finally(() => {
  setIsLoading(false)
});
    e.target.reset();
  }
 */}

  return (
    <div className='h-screen flex flex-col items-center'>
    <h3 className='font-palanquin text-center text-4xl font-bold'>
            Contact
            <span className='text-[#cd2d00]'>  Us </span>       
          </h3>
    <div>
      <p className='text-center my-20 mx-40 text-wrap font-semibold font-montserrat'>
      Reach out to CALI using any of our channels below. Please remember to state your name, contact information and a clear description of how we can be of assistance. We will be glad to engage.
      </p>
    </div>
    <div className="flex flex-row text-center justify-center mb-10">
      <SocialIcon url="https://www.linkedin.com/in/creative-arts-management-institute-cali-58b93a297/" className='h-12 w-12' fgColor='#cd2d00' bgColor='transparent' />
      <SocialIcon url='https://x.com/Caliinstitute?t=oMH14klkkCMT8iKhHaxYCw&s=08' className='h-12 w-12' fgColor='#cd2d00' bgColor='transparent'/>
      <SocialIcon url='https://instagram.com/cali.institute?igshid=MzRlODBiNWFlZA==' className='h-12 w-12' fgColor='#cd2d00' bgColor='transparent' />
      <SocialIcon url='https://www.facebook.com/profile.php?id=61552732195123' className='h-12 w-12' fgColor='#cd2d00' bgColor='transparent'/>      
    </div>
    <ReCAPTCHA
    sitekey='6LdlEFgpAAAAAIpstgTDknjMYxjxmNW13Qrt-OxN'
    onChange={(val) => setCapVal(val)}
    />
    <div className='text-center'>
    <button
      disabled={!capVal}
      className="font-montserrat font-semibold leading-normal text-black py-2 px-5 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-[#cd7e01] hover:bg-[#cd2d00] hover:text-white duration-300"
      onClick={handleClick}
    >
      Email Us
    </button>
    {isTextVisible && (
      <p className="mt-4 text-black font-semibold font-montserrat">
        Email Us: contact@cali.institute
      </p>
    )}
    </div>

    <div>

    </div>
    {/*
     <form
      ref={form}
      onSubmit={sendEmail}
      noValidate=""
       className="pt-7 pl-7 pr-7 pb-7">
    */}
     
       {/* 
       <div className="w-full max-w-md mx-auto">
            <h3 className='font-palanquin text-center text-4xl font-bold'>
            Contact
            <span className='text-[#cd2d00]'>  Us </span>       
          </h3>
          <div className="w-full flex flex-col my-4">
            <label className="font-bold text-gray-800" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              placeholder="Name"
              minLength={3}
              maxLength={150}
              required
              className="p-4 bg-gray-50 border border-gray-100"
              autoComplete="off"
              name="name"
            />
          </div>
          
          <div className="w-full flex flex-col my-4">
            <label className="font-bold text-gray-800" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              placeholder="email"
              minLength={5}
              maxLength={150}
              required
              className="p-4 bg-gray-50 border border-gray-100"
              autoComplete="off"
              name="email"
            />
          </div>
          <div className="w-full flex flex-col my-4">
            <label className="font-bold text-gray-800" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              placeholder="Subject"
              minLength={3}
              maxLength={150}
              required
              className="p-4 bg-gray-50 border border-gray-100"
              autoComplete="off"
              name="subject"
            />
          </div>
          <div>
            <label className="font-bold text-gray-800" htmlFor="message">
              Message
            </label>
            <textarea
              placeholder="Type your Message"
              rows={6}
              required
              minLength={2}
              maxLength={500}
              name="message"
              className="w-full p-4 bg-gray-50 border border-gray-100"
            />
          </div>
          <div className='mt-11'>
          <button 
          type="submit"
          className="gap-2 px-7 py-4 border font-montserrat leading-none bg-[#cd7e01] text-white border-[#cd7e01] rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#cd2d00] hover:text-white duration-300">
           {isLoading ? "Loading..." : "Send"}
          <ToastContainer />
        </button>
        </div>
        </div>
       */}
        {/*
        </form>
         */}
      
    </div>
  );
}

export default Contact;
