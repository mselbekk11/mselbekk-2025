import Currently from './components/currently';
import Intro from './components/intro';
import Links from './components/links';
import Projects from './components/projects';

export default function Home() {
  return (
    <main className='flex flex-col gap-16 max-w-2xl '>
      <Intro />
      <Currently />
      <Projects />
      <Links />
    </main>
  );
}
