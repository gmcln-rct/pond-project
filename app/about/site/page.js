import Link from "next/link";

import styles from "../page.module.scss";

// ABOUT SITE
export default function AboutPage() {
  return (
    <section className={styles.aboutSection}>
      <h1 className={styles.aboutSection__title}>About Site</h1>

      <p>
        The site was created and designed by Front End Developer{" "} <Link href="https://www.glennmcclanan.com/" className={styles.aboutSection__link}>Glenn McClanan</Link> of{" "}
        <Link href="https://riocreate.com/" className={styles.aboutSection__link}>Rio Create</Link> in New York City, using{" "}
        <Link href="https://nextjs.org/" className={styles.aboutSection__link}>Next.js</Link> and SCSS.
      </p>

      <h2 className={styles.aboutSection__listTitle}>
        Other sites by Glenn McClanan/Rio Create
      </h2>
      <ul className={styles.aboutSection__list}>
        <li>
          <Link href="https://winography.net/" className={styles.aboutSection__link}>Winography</Link>
        </li>
        <li>
          <Link href="https://fasterthan.net/" className={styles.aboutSection__link}>Faster Than</Link>
        </li>
        <li>
          <Link href="https://writeword.net/" className={styles.aboutSection__link}>The Write Word</Link>
        </li>
        <li>
          <Link href="https://verbing.ninja/" className={styles.aboutSection__link}>Verbing Ninja</Link>
        </li>
        <li>
          <Link href="https://seaorgan.net/" className={styles.aboutSection__link}>Sea Organ</Link>
        </li>
        <li>
          <Link href="https://www.copoecolher.com//" className={styles.aboutSection__link}>Copo e colher</Link>
        </li>
      </ul>
    </section>
  );
}
