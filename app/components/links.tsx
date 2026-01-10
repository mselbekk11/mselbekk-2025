'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const links = [
  {
    title: <ArrowRight className='w-4 h-4' />,
    address: 'mselbekk11@gmail.com',
    id: 'email',
    link: 'mailto:mselbekk11@gmail.com',
  },
  {
    title: <ArrowRight className='w-4 h-4' />,
    address: 'Twitter / X',
    id: 'x',
    link: 'https://x.com/mselbekk1',
  },
  {
    title: <ArrowRight className='w-4 h-4' />,
    address: 'Github',
    id: 'github',
    link: 'https://github.com/mselbekk11',
  },
  {
    title: <ArrowRight className='w-4 h-4' />,
    address: 'LinkedIn',
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
      <div className='flex flex-col gap-4 font-stix-two-text text-sm md:text-[15px]'>
        {/* <h2 className='text-muted underline'>Links</h2> */}
        {links.map((item) => (
          <div key={item.id} className='flex gap-2 items-center'>
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
