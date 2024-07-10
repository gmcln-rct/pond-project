import Link from "next/link";

import styles from "../page.module.scss";

// ABOUT SITE
export default function AboutPage() {
  return (
    <section className={styles.aboutSection}>
      <h1 className={styles.aboutSection__title}>About Site</h1>

      <p className={styles.aboutSection__content}>
        The site was created and designed by Front End Developer{" "}
        <Link href="https://www.glennmcclanan.com/">Glenn McClanan</Link> of{" "}
        <a href="https://riocreate.com/">Rio Create</a> in New York City, using{" "}
        <a href="https://nextjs.org/">Next.js</a> and SCSS.
      </p>

      <h2 className={styles.aboutSection__listTitle}>
        Other sites by Glenn McClanan/Rio Create
      </h2>
      <ul className={styles.aboutSection__list}>
        <li>
          <Link href="https://winography.net/">Winography</Link>
        </li>
        <li>
          <Link href="https://fasterthan.net/">Faster Than</Link>
        </li>
        <li>
          <Link href="https://writeword.net/">The Write Word</Link>
        </li>
        <li>
          <Link href="https://verbing.ninja/">Verbing Ninja</Link>
        </li>
        <li>
          <Link href="https://seaorgan.net/">Sea Organ</Link>
        </li>
        <li>
          <Link href="https://www.copoecolher.com//">Copo e colher</Link>
        </li>
      </ul>
    </section>
  );
}
