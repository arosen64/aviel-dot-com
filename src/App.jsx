import Header from './components/Header/Header.jsx';
import ExperienceSection from './components/Experience/ExperienceSection.jsx';
import ProjectsSection from './components/Projects/ProjectsSection.jsx';
import SkillsSection from './components/Skills/SkillsSection.jsx';
import Footer from './components/Footer/Footer.jsx';
import { profile, experience, featuredProjects, otherProjects, skillGroups, disclosures } from './data/content.js';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.page}>
      <section className={styles.column}>
        <Header profile={profile} />
        <ExperienceSection experience={experience} />
        <ProjectsSection featured={featuredProjects} other={otherProjects} />
        <SkillsSection groups={skillGroups} />
        <Footer disclosures={disclosures} />
      </section>
    </div>
  );
}
