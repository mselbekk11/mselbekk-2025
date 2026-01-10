'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

const currently = [
  {
    title: 'Selbekk Labs',
    subtitle: 'Software Agency',
    id: 'selbekk-studio',
    link: 'https://selbekk.studio',
  },
];

export default function Currently() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.2,
        ease: 'easeIn',
      }}
    >
      <div className='flex flex-col gap-4 font-stix-two-text text-sm md:text-[15px]'>
        <h2 className='text-muted underline'>Currently</h2>
        {currently.map((item) => (
          <Link
            href={item.link}
            target='_blank'
            key={item.id}
            className='flex justify-between py-2 group'
          >
            <p className=''>{item.title}</p>
            <p className='text-muted group-hover:text-foreground transition-all duration-300'>
              {item.subtitle}
            </p>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
