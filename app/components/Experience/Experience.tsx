import ResumeTimeline from './Timeline/Timeline';
import Navigation from '../Navigation/Navigation';

const timelineItems = [
  {
    date: '2020 - Present',
    title: 'Senior Developer',
    description: 'Leading development teams and architecting complex systems.',
  },
  {
    date: '2020 - Present',
    title: 'Senior Developer',
    description: 'Leading development teams and architecting complex systems.',
  },
  {
    date: '2020 - Present',
    title: 'Senior Developer',
    description: 'Leading development teams and architecting complex systems.',
  },
  {
    date: '2020 - Present',
    title: 'Senior Developer',
    description: 'Leading development teams and architecting complex systems.',
  },
  {
    date: '2020 - Present',
    title: 'Senior Developer',
    description: 'Leading development teams and architecting complex systems.',
  },

];

export default function Page() {
  return (
    <div>
      <Navigation />
      <h1>My Digital Resume</h1>
      <ResumeTimeline items={timelineItems} />
    </div>
  );
}