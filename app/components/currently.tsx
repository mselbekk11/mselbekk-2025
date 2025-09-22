import Link from 'next/link';

const currently = [
  {
    title: 'Selbekk Studio',
    subtitle: 'Software Angency',
    id: 'selbekk-studio',
    link: 'https://selbekk.studio',
  },
];

export default function Currently() {
  return (
    <div className='flex flex-col gap-4 font-inter text-[15px]'>
      <h2 className='text-muted underline'>Currently</h2>
      {currently.map((item) => (
        <Link
          href={item.link}
          target='_blank'
          key={item.id}
          className='flex justify-between border-y border-[#222222] py-4 group'
        >
          <p className='font-semibold'>{item.title}</p>
          <p className='text-muted group-hover:text-foreground transition-all duration-300'>
            {item.subtitle}
          </p>
        </Link>
      ))}
    </div>
  );
}
