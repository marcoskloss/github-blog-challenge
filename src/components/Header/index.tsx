import effect from '../../assets/background-effect.svg';
import logo from '../../assets/logo.svg';

import styles from './styles.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.glow} ${styles.glowLeft}`} />
      <img src={effect} alt="" />
      <img src={logo} alt="" />
      <img src={effect} alt="" />
      <div className={`${styles.glow} ${styles.glowRight}`} />
    </header>
  );
}

export default Header;
