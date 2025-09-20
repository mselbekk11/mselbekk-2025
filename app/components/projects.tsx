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
    <div className='flex flex-col gap-4'>
      <h2>Selected Projects</h2>
      {projects.map((item) => (
        <div key={item.id} className='flex justify-between'>
          <p>{item.title}</p>
          <p>{item.subtitle}</p>
        </div>
      ))}
    </div>
  );
}
