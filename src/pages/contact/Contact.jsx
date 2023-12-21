import emailjs from 'emailjs-com'
import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Contact = () => {

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
  setIsLoading(false) // Reset loading state
});
    e.target.reset();
  }

  return (
    <div>
      <form
      ref={form}
      onSubmit={sendEmail}
      noValidate=""
       className="pt-7 pl-7 pr-7 pb-7">
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
      </form>
    </div>
  );
}

export default Contact;
