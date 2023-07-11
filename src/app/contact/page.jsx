"use client";

import Image from "next/image";

export const metadata = {
  title: "Contact",
  description: "Get in touch with us",
};

const Contact = () => {
  const formHandler = (e) => {
    e.preventDefault();
    alert("Your Message Hass been Sent");
  };
  return (
    <div className="contact">
      <div className="page-header py-5 text-center bg-slate-900 rounded-md">
        <h1 className="text-2xl font-bold">Contact</h1>
      </div>
      <div className="content py-10">
        <h2 className="text-[32px] font-bold">Let's Keep In Touch</h2>
        <p className="text-[#888] text-xl">Fill the form to contact us</p>

        <div className="mt-8 flex flex-col-reverse gap-5 lg:gap-10 items-center md:flex-row">
          <form className="flex-1 w-full" onSubmit={(e) => formHandler(e)}>
            <div className="form-row flex gap-5 mb-5">
              <div className="form-col w-full">
                <label htmlFor="name" className="mb-2 block">
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-[#333] bg-transparent rounded-md focus:outline-none text-white placeholder:text-[#333]"
                />
              </div>

              <div className="form-col w-full">
                <label htmlFor="phone" className="mb-2 block">
                  Phone:
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 border border-[#333] bg-transparent rounded-md focus:outline-none text-white placeholder:text-[#333]"
                />
              </div>
            </div>

            <div className="form-row mb-5">
              <div className="form-col w-full">
                <label htmlFor="email" className="mb-2 block">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-[#333] bg-transparent rounded-md focus:outline-none text-white placeholder:text-[#333]"
                />
              </div>
            </div>

            <div className="form-row mb-5">
              <div className="form-col w-full">
                <label htmlFor="message" className="mb-2 block">
                  Message:
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  className="w-full px-4 py-3 border border-[#333] bg-transparent rounded-md focus:outline-none text-white placeholder:text-[#333]"
                  placeholder="Enter your message"
                ></textarea>
              </div>
            </div>
            <div className="form-row">
              <button
                type="submit"
                className="px-6 py-3 bg-transparent text-[#333] font-semibold border border-[#333] rounded-md hover:bg-white hover:"
              >
                Submit
              </button>
            </div>
          </form>

          <aside className="flex-1">
            <Image
              src={"/contact-bg.jpg  "}
              width={1000}
              height={500}
              alt="contact image"
            />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Contact;
