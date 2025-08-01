import Image from 'next/image';
import { styles } from './About.styles';

export default function About() {
  return (
    <section id="about" className={styles.wrapper()}>
      <div className={styles.container()}>
        <Image
          src="/next.svg"
          alt="Profile"
          width={120}
          height={120}
          className={styles.image()}
        />
        <h2 className={styles.heading()}>About Me</h2>
        <p className={styles.text()}>
          フロントエンドとバックエンドを行き来する開発者。UIデザインと高品質なコードが好きです。
        </p>
      </div>
    </section>
  );
}
