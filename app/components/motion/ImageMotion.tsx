import { motion } from 'framer-motion';
import React from 'react';

interface ImageMotionProps {
  label: string;
}

export const ImageMotion: React.FC<ImageMotionProps> = ({ label }) => (
  <motion.div
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ['20%', '20%', '50%', '50%', '20%'],
    }}
  />
);
