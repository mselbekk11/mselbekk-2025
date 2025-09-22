'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

const projects = [
  {
    title: 'Roam International',
    subtitle: 'Luxury Travel Application',
    id: 'roam',
    link: 'https://roaminternational.com',
  },
  {
    title: 'Trizzy.ai',
    subtitle: 'AI Application',
    id: 'trizzy',
    link: 'https://www.trizzy.ai/',
  },
  {
    title: 'Growth',
    subtitle: 'Personal Training Software',
    id: 'growth',
    link: '',
  },

  {
    title: 'LLM DEPT.',
    subtitle: 'Coming Soon',
    id: 'llm-dept',
    link: '',
  },
];

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.4,
        ease: 'easeIn',
      }}
    >
      <div className='flex flex-col gap-4 font-inter text-[15px]'>
        <h2 className='text-muted underline'>Selected Projects</h2>
        <div className='divide-y divide-[#222222] border-y border-[#222222]'>
          {projects.map((item) => (
            <Link
              href={item.link}
              target='_blank'
              key={item.id}
              className='flex justify-between py-4 group'
            >
              <p className='font-semibold'>{item.title}</p>
              <p className='text-muted group-hover:text-foreground transition-all duration-300'>
                {item.subtitle}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
