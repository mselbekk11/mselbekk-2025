import Link from 'next/link';

const links = [
  {
    title: 'Email:',
    address: 'mselbekk@gmail.com',
    id: 'email',
    link: 'mailto:mselbekk@gmail.com',
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
    <div className='flex flex-col gap-4 font-inter text-[15px]'>
      <h2 className='text-muted underline'>Links</h2>
      {links.map((item) => (
        <div key={item.id} className='flex gap-2'>
          <p>{item.title}</p>
          <Link href={item.link} target='_blank'>
            <p className='text-muted underline cursor-pointer'>
              {item.address}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}
