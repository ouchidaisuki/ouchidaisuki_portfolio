import Link from "next/link";
import { styles } from './Header.styles';

export default function Header() {
  return (
    <header className={styles.wrapper()}>
      <div className={styles.container()}>
        <Link href="/" className={styles.logo()}>MyPortfolio</Link>
        <nav className={styles.nav()}>
          <Link href="/#works" className={styles.navItem()}>Work</Link>
          <Link href="/#about" className={styles.navItem()}>About</Link>
        </nav>
      </div>
    </header>
  );
}
