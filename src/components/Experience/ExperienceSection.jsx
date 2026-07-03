import Section from '../Section/Section.jsx';
import ExperienceItem from './ExperienceItem.jsx';

export default function ExperienceSection({ experience }) {
  return (
    <Section title="Experience">
      {experience.map((job) => (
        <ExperienceItem key={`${job.company}-${job.dates}`} {...job} />
      ))}
    </Section>
  );
}
