"use client";

import { motion } from "framer-motion";

const AnimatedMain = ({ children, ...props }) => {
  return <motion.main {...props}>{children}</motion.main>;
};

export default AnimatedMain;
