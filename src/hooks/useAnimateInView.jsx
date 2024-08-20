import { useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export function useAnimateInView(options = { once: true }) {
  const ref = useRef(null);
  const isInView = useInView(ref, options);
  const reduceMotion = useReducedMotion();

  const text2Variant = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };
  const textVariants = {
    hidden: { opacity: 0, x: reduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };
  const containerVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.4 },
    },
  };

  return {
    ref,
    isInView,
    text2Variant,
    textVariants,
    containerVariants,
    reduceMotion,
  };
}
