import { Nav } from "../components";

export default function Contact() {
  return (
    <div>
      <Nav />
      <form className="padding">
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
        <button
          type="submit"
          className="px-4 py-2 w-40 bg-coral-red disabled:bg-gray-400 disabled:text-gray-100 text-white font-montserrat font-semibold leading-normal rounded-lg mt-4"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}