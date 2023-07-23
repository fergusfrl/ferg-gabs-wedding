"use client";

import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  children: ReactNode;
};

const AnimateIn = ({ children }: Props) => {
  return (
    <AnimatePresence>
      <motion.div
        key="slide-in"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimateIn;
