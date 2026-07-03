import styles from './Footer.module.css';

export default function Footer({ disclosures = [] }) {
  if (disclosures.length === 0) return null;

  return (
    <div className={styles.footer}>
      {disclosures.map((line) => (
        <p key={line} className={styles.disclosure}>
          {line}
        </p>
      ))}
    </div>
  );
}
