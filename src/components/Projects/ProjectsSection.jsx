import Section from '../Section/Section.jsx';
import ProjectItem from './ProjectItem.jsx';

export default function ProjectsSection({ featured, other }) {
  return (
    <Section title="Projects">
      {featured.map((project) => (
        <ProjectItem key={project.title} {...project} />
      ))}
      {other.map((project) => (
        <ProjectItem key={project.title} {...project} />
      ))}
    </Section>
  );
}
