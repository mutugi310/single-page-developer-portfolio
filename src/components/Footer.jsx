import React from "react";
import { FaGithub, FaMedium, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Socials from "./sharedComponents/Socials";

function Footer() {
  return (
    <footer className="bg-black-light">
      <div className="container mx-auto   px-4 sm:px-15 lg:px-32">
        <section className="flex flex-col border-t-[1.5px] border-t-gray py-16  w-full gap-4 items-center lg:flex-row lg:justify-between  ">
          <p className="text-2xl text-center">mutugiKelvin</p>
          <div className="flex justify-evenly gap-4  ">
            <Socials bgColor="bg-black" />
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
