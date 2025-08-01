import Image from 'next/image';
import { styles } from './Works.styles';

const works = [
  {
    src: '/window.svg',
    title: 'Window App',
    description: 'デスクトップUIのような操作感を持つWebアプリケーションです。'
  },
  {
    src: '/globe.svg',
    title: 'Globe Project',
    description: '世界中の情報を可視化するインタラクティブな地図アプリ。'
  },
  {
    src: '/file.svg',
    title: 'File Manager',
    description: 'シンプルで直感的なファイル管理ツール。'
  }
];

export default function Works() {
  return (
    <section id="works" className={styles.wrapper()}>
      <h2 className={styles.heading()}>Works</h2>
      <div className={styles.grid()}>
        {works.map((work) => (
          <div key={work.title} className={styles.item()}>
            <Image
              src={work.src}
              alt={work.title}
              width={96}
              height={96}
              className={styles.image()}
            />
            <h3 className={styles.title()}>{work.title}</h3>
            <p className={styles.description()}>{work.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
