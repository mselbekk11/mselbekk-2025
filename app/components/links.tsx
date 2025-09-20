const links = [
  {
    title: 'Email:',
    address: 'mselbekk@gmail.com',
    id: 'email',
    link: '',
  },
  {
    title: 'X:',
    address: '@mselbekk1',
    id: 'x',
    link: '',
  },
  {
    title: 'Github:',
    address: '@mselbekk11',
    id: 'github',
    link: '',
  },
  {
    title: 'LinkedIn:',
    address: 'in/morgan-selbekk',
    id: 'linkedin',
    link: '',
  },
];

export default function Links() {
  return (
    <div className='flex flex-col gap-4 font-inter text-[15px]'>
      <h2 className='text-muted underline'>Links</h2>
      {links.map((item) => (
        <div key={item.id} className='flex gap-2'>
          <p>{item.title}</p>
          <p className='text-muted underline cursor-pointer'>{item.address}</p>
        </div>
      ))}
    </div>
  );
}
