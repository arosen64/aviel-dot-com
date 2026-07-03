import styles from './ProjectItem.module.css';

export default function ProjectItem({ title, tagline, description, stack, link }) {
  return (
    <div className={styles.item}>
      <div className={styles.title}>{title}</div>
      <div className={styles.tagline}>{tagline}</div>
      <p className={styles.description}>{description}</p>
      <div className={styles.footer}>
        {stack && <div className={`mono ${styles.stack}`}>{stack.join(', ')}</div>}
        {link && (
          <a href={link} className={styles.link}>
            View →
          </a>
        )}
      </div>
    </div>
  );
}
