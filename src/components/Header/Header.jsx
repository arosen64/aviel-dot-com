import headshot from '../../assets/headshot.jpg';
import styles from './Header.module.css';

export default function Header({ profile }) {
  return (
    <div className={styles.header}>
      <img src={headshot} alt={profile.name} className={styles.avatar} />
      <h1 className={styles.name}>{profile.name}</h1>
      <div className={styles.location}>{profile.location}</div>
      <p className={styles.bio}>{profile.bio}</p>
      <div className={`mono ${styles.contact}`}>
        <a href={`mailto:${profile.email}`} className={styles.contactItem}>
          {profile.email}
        </a>
        <span className={styles.contactItem}>{profile.phone}</span>
      </div>
      <div className={styles.links}>
        {profile.links.map((link) => (
          <a key={link.label} href={link.href} className={styles.link}>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
