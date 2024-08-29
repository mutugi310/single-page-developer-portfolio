import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import leftOvals from "../../assets/ovals-left.png";
import { motion, useReducedMotion } from "framer-motion";
import { useAnimateInView } from "../../hooks/useAnimateInView";

function Contact() {
  /* const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); */
  const reduceMotion = useReducedMotion();
  const { text2Variant, textVariants } = useAnimateInView();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    toast.info("Sending...");

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
        toast.error("Failed to submit the form.");
        return;
      }

      // Try to parse the JSON response
      const data = await response.json();

      if (data.success) {
        setFormData({ name: "", email: "", message: "" });
        toast.success("Form Submitted Successfully");
      } else {
        console.log("Error", data);
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error submitting form", error);
      toast.error("An error occurred while submitting the form.");
    }
  };

  return (
    <>
      <div className="w-full flex flex-col h-full gap-8 items-center text-center align-top sm:w-2/3 mx-auto md:w-full  md:items-start md:text-start ">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={text2Variant}
          viewport={{ once: true }}
          className="font-bold text-4xl md:text-5xl lg:text-6xl "
        >
          Contact
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          viewport={{ once: true }}
        >
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </motion.p>
      </div>

      <div className="w-full flex flex-col sm:w-2/3 mx-auto md:w-full  ">
        <motion.form className="w-full " onSubmit={handleSubmit}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            viewport={{ once: true }}
          >
            <label
              htmlFor="name"
              className="absolute w-px h-px -m-px overflow-hidden whitespace-nowrap border-0"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-black-light py-4 w-full border-b-white border-b-2 pl-4 
          focus:border-b-green focus:outline-none "
            />
            <br />
            <label
              htmlFor="email"
              className="absolute w-px h-px -m-px overflow-hidden whitespace-nowrap border-0"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-black-light peer  py-4 w-full border-b-white border-b-2 mt-4 pl-4 
          focus:border-b-green focus:outline-none  invalid:border-b- invalid:border-b-2 invalid:text-[#FF6F5B]
          "
            />
            <br />
            <p className="text-sm text-end text-[#FF6F5B] mt-2 invisible  peer-invalid:visible ">
              Sorry, invalid format here
            </p>
            <label
              htmlFor="message"
              className="absolute w-px h-px -m-px overflow-hidden whitespace-nowrap border-0"
            >
              Message
            </label>
            <textarea
              name="message"
              placeholder="Message"
              id="message"
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
          </motion.div>
          <div className="absolute bottom-[4rem] -left-[12rem] w-[24rem] max-h-[4rem] z-100 opacity-3 rounded-full sm:[10rem] lg:-left-[6rem]">
            <motion.img
              initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              src={leftOvals}
              alt="ovals overlay"
            />
          </div>
          <ToastContainer></ToastContainer>
        </motion.form>
      </div>
    </>
  );
}

export default Contact;
