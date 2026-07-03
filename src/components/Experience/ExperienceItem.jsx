import styles from './ExperienceItem.module.css';

export default function ExperienceItem({ dates, role, company, bullets }) {
  return (
    <div className={styles.item}>
      <div className={`mono ${styles.dates}`}>{dates}</div>
      <div className={styles.role}>{role}</div>
      <div className={styles.company}>{company}</div>
      <ul className={styles.bullets}>
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}
