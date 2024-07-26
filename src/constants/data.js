import { RiTailwindCssFill } from "react-icons/ri";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaUniversalAccess,
  FaReact,
  FaAws,
  FaWordpress,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";

export const HERO_TEXT =
  "Passionate Front-End Developer and AWS Cloud practitioner crafting seamless user experiences with modern web technologies.";
export const ABOUT_TEXT =
  "As a result-oriented front-end developer with a strong foundation in web development and cloud computing, I excel in creating dynamic, responsive, and accessible web applications. My expertise spans across various aspects of web development and AWS cloud services, always aiming to deliver high-quality, user-centric, and impactful digital solutions while maintaining highly-available, scalable, and secure systems.";
export const ABOUT_TEXT_Bottom =
  "My passion for web development and cloud computing drives me to continually learn and implement the latest technologies, ensuring that the solutions I deliver are both innovative and effective.";
export const ABOUT_EXPERT = [
  "Developing responsive web applications using modern frameworks, improving user experience and performance.",
  "Developing highly interactive user interfaces, enhancing user engagement and satisfaction.",
  "Integrating third-party services such as AWS, leveraging cloud computing to optimize application performance and reliability.",
  "Improving website loading times by upto 30% through performance optimization techniques.",
  "Implementing accessibility best practices, ensuring inclusive and user-friendly web experiences.",
  "Continually learning and aspiring to implement the latest technologies.",
];

const calculateExperience = (startYear) => {
  const currentYear = new Date().getFullYear();
  return Math.ceil(currentYear - startYear);
};
export const SKILLS = [
  {
    icon: FaHtml5,
    name: "HTML",
    experienceYrs: calculateExperience(2022),
    className: "text-[#f06529] h-6 w-6",
  },
  {
    icon: FaCss3Alt,
    name: "CSS",
    experienceYrs: calculateExperience(2022),
    className: "text-[#2965f1] h-6 w-6",
  },
  {
    icon: FaAws,
    name: "AWS",
    experienceYrs: calculateExperience(2023),
    className: "text-orange-500 h-6 w-6 bg-white",
  },
  {
    icon: FaJsSquare,
    name: "JavaScript",
    experienceYrs: calculateExperience(2023),
    className: "text-yellow-500 h-6 w-6",
  },
  {
    icon: FaUniversalAccess,
    name: "Accessibility",
    experienceYrs: calculateExperience(2022),
    className: "text-white h-6 w-6",
  },
  {
    icon: FaReact,
    name: "React",
    experienceYrs: calculateExperience(2023),
    className: "text-[#88dded] h-6 w-6",
  },
  {
    icon: RiTailwindCssFill,
    name: "Tailwind",
    experienceYrs: calculateExperience(2023),
    className: "text-[#21759b] h-6 w-6",
  },
  {
    icon: FaWordpress,
    name: "WordPress",
    experienceYrs: calculateExperience(2022),
    className: "text-black bg-white h-6 w-6",
  },
  {
    icon: FaNodeJs,
    name: "NodeJS",
    experienceYrs: calculateExperience(2023),
    className: "text-green h-6 w-6",
  },
];

export const PROJECTS = [
  {
    name: "Audiophile E-commerce",
    gitHub: "https://github.com/mutugi310/audiophile-ecommerce-website",
    hosted: "https://kelvin-audiophile-ecommerce-website.netlify.app/",
    techStack: ["React", "Tailwind-CSS"],
  },
  {
    name: "Countries App",
    gitHub: "https://github.com/mutugi310/Countries_app",
    hosted: "https://kelvin-countries-app.netlify.app/",
    techStack: ["React", "Tailwind-CSS"],
  },
  {
    name: "Law Firm Landing Page",
    gitHub: "https://github.com/mutugi310/AZ-C5-HTML-CSS_FinalProject",
    hosted: "https://mutugi310.github.io/AZ-C5-HTML-CSS_FinalProject/#",
    techStack: ["HTML", "CSS JavaScript"],
  },
  {
    name: "Developer Portfolio",
    gitHub: "https://github.com/mutugi310/single-page-developer-portfolio",
    hosted: "https://project1.com",
    techStack: ["React", "Tailwind-CSS"],
  },
  {
    name: " Company website",
    gitHub: "https://github.com/user/project3",
    hosted: "https://project3.com",
    techStack: ["React", "Tailwind-CSS"],
  },

  {
    name: "Loan Calculator",
    gitHub: "https://github.com/user/project5",
    hosted: "https://project5.com",
    techStack: ["HTML", "CSS JavaScript"],
  },
];
