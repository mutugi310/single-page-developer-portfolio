import React from "react";
import { Link as ScrollLink } from "react-scroll";

function CustomScrollingLink({
  to,
  children,
  activeClass,
  className,
  duration = 500,
  ...props
}) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById(to).scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ScrollLink
      to={to}
      smooth={true}
      duration={duration}
      tabIndex="0"
      activeClass={activeClass}
      className={className}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {children}
    </ScrollLink>
  );
}

export default CustomScrollingLink;
