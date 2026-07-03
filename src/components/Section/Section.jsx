import styles from './Section.module.css';

// Generic labeled section wrapper shared by Experience, Projects, and Skills.
export default function Section({ title, children }) {
  return (
    <div className={styles.section}>
      <div className={`mono ${styles.label}`}>{title}</div>
      {children}
    </div>
  );
}
