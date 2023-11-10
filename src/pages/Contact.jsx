import { Button, Nav } from "../components";
import { Footer } from "../sections";

export default function Contact() {
  return (
    <div>
      <Nav />
      <form className="pt-28 pl-7 pr-7 pb-7">
        <div className="w-full max-w-md mx-auto">
            <h3 className='font-palanquin text-center text-4xl font-bold'>
            Contact
            <span className='text-coral-red'>  Us </span>       
          </h3>
          <div className="w-full flex flex-col my-4">
            <label className="font-bold text-gray-800" htmlFor="name">
              Name
            </label>
            <input
              type="text"
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
              minLength={5}
              maxLength={150}
              required
              className="p-4 bg-gray-50 border border-gray-100"
              autoComplete="off"
              id="email"
            />
          </div>
          <div>
            <label className="font-bold text-gray-800" htmlFor="message">
              Message
            </label>
            <textarea
              rows={4}
              required
              minLength={10}
              maxLength={500}
              name="message"
              className="w-full p-4 bg-gray-50 border border-gray-100"
            />
          </div>
          <div className='mt-11'>
          <Button label='More Details' />
        </div>
        </div>
      </form>
      <section className=' bg-[#dcde39] padding-x padding-t pb-8'>
      <Footer />
    </section>
    </div>
  );
}
