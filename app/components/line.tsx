'use client';

import { motion } from 'motion/react';

export default function Line() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.6,
        ease: 'easeIn',
      }}
    >
      <div className='block h-px w-full bg-[length:4px_1px] bg-bottom bg-repeat-x [--ui-border-color:theme(colors.muted)] [background-image:linear-gradient(90deg,var(--ui-border-color)_1px,transparent_1px)]'></div>
    </motion.div>
  );
}
