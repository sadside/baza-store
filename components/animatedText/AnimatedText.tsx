import { AnimatePresence, motion } from "framer-motion";
import React, { ReactNode } from "react";

type AnimatedTextProps = {
  children: ReactNode;
};

export const AnimatedText = ({ children, ...props }: AnimatedTextProps) => {
  console.log("render");

  return (
    // <AnimatePresence>
    // {children && (
    <motion.div
      {...props}
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 4, opacity: 0 }}
      exit={{ y: 4 }}
      transition={{ duration: 0.2, delay: 0.35, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
    // )}
    // </AnimatePresence>
  );
};
