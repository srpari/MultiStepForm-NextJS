import React from 'react';
import { motion } from 'framer-motion';

export default function Animator({ children }) {
  return (
    <motion.div
      style={{ position: 'relative' }}
      initial={{ x: 200, scale: 0.8, opacity: 0 }}
      animate={{ x: 0, scale: 1, opacity: 0.8 }}
      exit={{ x: -200, scale: 0.8, opacity: 0 }}  
      transition={{ ease: "easeOut", duration: 1 }}
    >
      {children}
    </motion.div>
  );
}
