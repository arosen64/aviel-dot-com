import Section from '../Section/Section.jsx';
import styles from './SkillsSection.module.css';

export default function SkillsSection({ groups }) {
  return (
    <Section title="Skills">
      {groups.map((group) => (
        <div key={group.label} className={styles.group}>
          <span className={styles.groupLabel}>{group.label}:</span> {group.items.join(', ')}
        </div>
      ))}
    </Section>
  );
}
