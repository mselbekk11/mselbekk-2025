const projects = [
  {
    title: 'LLM DEPT.',
    subtitle: 'coming soon',
    id: 'llm-dept',
    link: '',
  },
  {
    title: 'Roam International',
    subtitle: 'Luxury Travel Application',
    id: 'roam',
    link: 'https://roaminternational.com',
  },
  {
    title: 'Growth',
    subtitle: 'Personal Training Software',
    id: 'growth',
    link: '',
  },
  {
    title: 'Trizzy.ai',
    subtitle: 'AI Application',
    id: 'trizzy',
    link: 'https://www.trizzy.ai/',
  },
];

export default function Projects() {
  return (
    <div className='flex flex-col gap-4 font-inter text-[15px]'>
      <h2 className='text-muted underline'>Selected Projects</h2>
      <div className='divide-y divide-[#222222] border-y border-[#222222]'>
        {projects.map((item) => (
          <div key={item.id} className='flex justify-between py-4'>
            <p className='font-semibold'>{item.title}</p>
            <p className='text-muted'>{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
