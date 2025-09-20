const currently = [
  {
    title: 'Selbekk Studio',
    subtitle: 'Software Angency',
    id: 'selbekk-studio',
  },
];

export default function Currently() {
  return (
    <div className='flex flex-col gap-4 font-inter text-[15px]'>
      <h2 className='text-muted underline'>Currently</h2>
      {currently.map((item) => (
        <div
          key={item.id}
          className='flex justify-between border-y border-[#222222] py-4'
        >
          <p className='font-semibold'>{item.title}</p>
          <p className='text-muted'>{item.subtitle}</p>
        </div>
      ))}
    </div>
  );
}
