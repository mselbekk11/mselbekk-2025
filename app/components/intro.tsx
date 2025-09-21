import Image from 'next/image';

export default function Intro() {
  return (
    <div className='flex flex-col gap-4 font-inter text-[15px]'>
      <Image
        src='/profile-pic.png'
        alt='Morgan Selbekk Profile Picture'
        width={125}
        height={125}
      />
      <h1 className='font-semibold'>
        Morgan Selbekk{' '}
        <span className='text-muted'>- Designer &amp; Developer</span>
      </h1>
      <p className=''>
        I&apos;m a Developer living in San Fransisco. I have 10 years agency
        experience across Design, Development & Project Management. I currently
        run <span className='text-muted cursor-pointer'>Selbekk Studio</span>,
        where i design and build custom full stack applications for my clients.
        I also like to build my own AI products.{' '}
      </p>
    </div>
  );
}
