import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Button({ text, onClick, type, href, target, rel, to, smoothScroll }) {
  const commonClasses =
    "uppercase border-b-2 w-fit border-green my-2 hover:text-green hover:font-bold focus:text-green focus:font-bold";

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={commonClasses}>
        {text}
      </a>
    );
  }

  if (to) {
    if (smoothScroll) {
      return (
        <ScrollLink
          to={to}
          smooth={true}
          duration={500}
          className={commonClasses}
        >
          {text}
        </ScrollLink>
      );
    }

    return (
      <Link to={to} className={commonClasses}>
        {text}
      </Link>
    );
  }

  return (
    <button onClick={onClick} type={type} className={commonClasses}>
      {text}
    </button>
  );
}

export default Button;
