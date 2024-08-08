import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-10 right-5 z-50 md:right-10">
      {isVisible && (
        <ScrollLink
          to="hero-section"
          smooth="true"
          tabIndex="0"
          duration={500}
          activeClass="active"
          className="text-md cursor-pointer  hover:text-green hover:scale-110 focus:text-green focus:scale-110"
        >
          <FaArrowUp size="18" />
        </ScrollLink>
      )}
    </div>
  );
};

export default GoToTopButton;
