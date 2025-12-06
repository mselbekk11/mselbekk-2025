'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

const links = [
  {
    title: 'Email::',
    address: 'mselbekk11@gmail.com',
    id: 'email',
    link: 'mailto:mselbekk11@gmail.com',
  },
  {
    title: 'X:',
    address: '@mselbekk1',
    id: 'x',
    link: 'https://x.com/mselbekk1',
  },
  {
    title: 'Github:',
    address: '@mselbekk11',
    id: 'github',
    link: 'https://github.com/mselbekk11',
  },
  {
    title: 'LinkedIn:',
    address: 'in/morgan-selbekk',
    id: 'linkedin',
    link: 'https://www.linkedin.com/in/morgan-selbekk/',
  },
];

export default function Links() {
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
      <div className='flex flex-col gap-4 font-stix-two-text text-sm md:text-[17px]'>
        <h2 className='text-muted underline'>Links</h2>
        {links.map((item) => (
          <div key={item.id} className='flex gap-2'>
            <p>{item.title}</p>
            <Link href={item.link} target='_blank'>
              <p className='text-muted hover:underline cursor-pointer'>
                {item.address}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
