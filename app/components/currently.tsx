const currently = [
  {
    title: 'Selbekk Studio',
    subtitle: 'Software Angency',
    id: 'selbekk-studio',
  },
];

export default function Currently() {
  return (
    <div className='flex flex-col gap-4'>
      <h2>Currently</h2>
      {currently.map((item) => (
        <div key={item.id} className='flex justify-between'>
          <p>{item.title}</p>
          <p>{item.subtitle}</p>
        </div>
      ))}
    </div>
  );
}
