import { Button, Nav } from "../components";
import { Footer } from "../sections";

export default function Contact() {
  return (
    <div>
      <Nav />
      <form className="pt-7 pl-7 pr-7 pb-7">
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
              id="name"
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
              id="email"
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
              id="subject"
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
          <Button label='Send' />
        </div>
        </div>
      </form>
      <section className=' bg-[#232323] padding-x padding-t pb-8 text-white'>
      <Footer />
    </section>
    </div>
  );
}
