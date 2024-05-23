// import { motion } from "framer-motion";

export const container = {
  hidden: { opacity: 0.25 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 2,
    },
  },
};

export const item = {
  hidden: { opacity: 0, y: -100, x: -500 },
  show: { opacity: 1, y: 0, x: 0 },
};

export const item2 = {
  hidden: { opacity: 0, y: 100, x: 500 },
  show: { opacity: 1, y: 0, x: 0 },
};
