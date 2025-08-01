// src/components/Hero.tsx
import { styles } from './Hero.styles';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className={styles.wrapper()}>
      <div className={styles.container()}>
        <h1 className={styles.title()}>Yuki Kimura</h1>
        <p className={styles.subtitle()}>React / Next.js / Node.js Developer</p>
        <p className={styles.catchCopy()}>
          自分のアイディアを、最速で形にする。
        </p>
        <div className={styles.buttons()}>
          <Link href="/#contact" className={styles.primaryButton()}>お問い合わせ</Link>
          <Link href="/#works" className={styles.secondaryButton()}>実績を見る</Link>
        </div>
      </div>
    </section>
  );
}
