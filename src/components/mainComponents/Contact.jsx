import React, { useState } from "react";
import leftOvals from "../../assets/ovals-left.png";

function Contact() {
  /* const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); */

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("message", formData.message);
    form.append("access_key", import.meta.env.VITE_WEB3_ACCESS_KEY);

    try {
      const response = await fetch(import.meta.env.VITE_WEB3_URL, {
        method: "POST",
        body: form,
      });

      // Check if the response status is okay
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response:", errorText);
        setResult("Failed to submit the form.");
        return;
      }

      // Try to parse the JSON response
      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setResult("An error occurred while submitting the form.");
    }
  };

  return (
    <>
      <div className="w-full flex flex-col h-full gap-8 items-center text-center align-top sm:w-2/3 mx-auto md:w-full  md:items-start md:text-start ">
        <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl ">Contact</h2>
        <p>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
      </div>

      <div className="w-full flex flex-col sm:w-2/3 mx-auto md:w-full  ">
        <form className="w-full " onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="bg-black-light py-4 w-full border-b-white border-b-2 pl-4 
          focus:border-b-green focus:outline-none "
          />{" "}
          <br />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="bg-black-light peer  py-4 w-full border-b-white border-b-2 mt-4 pl-4 
          focus:border-b-green focus:outline-none  invalid:border-b- invalid:border-b-2 invalid:text-[#FF6F5B]
          "
          />{" "}
          <br />
          <p className="text-sm text-end text-[#FF6F5B] mt-2 invisible  peer-invalid:visible ">
            Sorry, invalid format here
          </p>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="bg-black-light py-4 w-full border-b-white border-b-2 mt-4 pl-4
            focus:border-b-green focus:outline-none  "
          ></textarea>
          <br />
          <div className="flex justify-end">
            <button
              type="submit"
              className="uppercase border-b-2 w-fit border-green my-2 hover:text-green hover:font-bold"
            >
              Send Message
            </button>
          </div>
          <div className="  absolute bottom-[4rem] -left-[12rem] w-[24rem] max-h-[4rem] z-100 opacity-3 rounded-full sm:[10rem] lg:-left-[6rem]">
            <img src={leftOvals} alt="ovals overlay" />
          </div>
        </form>
        <span>{result}</span>
      </div>
    </>
  );
}

export default Contact;
