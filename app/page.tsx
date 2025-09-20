import Currently from './components/currently';
import Intro from './components/intro';
import Links from './components/links';
import Projects from './components/projects';

export default function Home() {
  return (
    <main className='flex flex-col gap-12 max-w-3xl'>
      <Intro />
      <Currently />
      <Projects />
      <Links />
    </main>
  );
}
