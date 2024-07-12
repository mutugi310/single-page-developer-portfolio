import React, { useState } from "react";
import leftOvals from "../../assets/ovals-left.png";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <>
      <div className="w-full flex flex-col h-full gap-8 items-center text-center align-top lg:items-start lg:text-start ">
        <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl py-4">
          Contact
        </h2>
        <p>
          I would love to hear about your project and{" "}
          <br className="sm:hidden md:hidden lg:hidden" />
          how I <br className="hidden sm:block md:block lg:block" /> could help.
          Please fill in the form, and{" "}
          <br className="sm:hidden md:hidden lg:hidden" />
          I’ll get back <br className="hidden sm:block md:block lg:block" /> to
          you as soon as possible.
        </p>
      </div>
      <div className="w-full flex flex-col  ">
        <form action="" className="w-full ">
          <input
            type="text"
            name=""
            id=""
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-black-light py-4 w-full border-b-white border-b-2 pl-4 
          focus:border-b-green focus:outline-none "
          />{" "}
          <br />
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-black-light peer  py-4 w-full border-b-white border-b-2 mt-4 pl-4 
          focus:border-b-green focus:outline-none  invalid:border-b- invalid:border-b-2 invalid:text-[#FF6F5B]
          "
          />{" "}
          <br />
          <p className="text-sm text-end text-[#FF6F5B] mt-2 invisible  peer-invalid:visible ">
            Sorry, invalid format here
          </p>
          <textarea
            name=""
            id=""
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-black-light py-4 w-full border-b-white border-b-2 mt-4 pl-4
          focus:border-b-green focus:outline-none  "
          ></textarea>
          <br />
          <div className="flex justify-end">
            <button
              type="submit"
              onClick={() => {
                alert(`${name} ${email} ${message}`);
              }}
              className="uppercase border-b-2 w-fit border-green my-2 hover:text-green hover:font-bold"
            >
              Send Message
            </button>
          </div>
          <div className="  absolute bottom-[4rem] -left-[12rem] w-[24rem] max-h-[4rem] z-100 opacity-3 rounded-full sm:[10rem] lg:-left-[6rem]">
            <img src={leftOvals} alt="ovals overlay" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
