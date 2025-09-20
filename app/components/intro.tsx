import Image from 'next/image';

export default function Intro() {
  return (
    <div className='flex flex-col gap-4 font-inter font-medium'>
      <Image
        src='/profile-pic.png'
        alt='Morgan Selbekk Profile Picture'
        width={125}
        height={125}
      />
      <h1>
        Morgan Selbekk{' '}
        <span className='text-muted'>- Designer &amp; Developer</span>
      </h1>
      <p>
        I&apos;m a Developer living in San Fransisco. I have 10 years agency
        experience across Design, Development & Project Management. I currently
        run <span className='text-muted cursor-pointer'>Selbekk Studio</span>,
        where i design and build custom full stack applications for my clients.
        I also like to build and launch my own AI products.{' '}
      </p>
    </div>
  );
}
