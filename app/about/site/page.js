import Link from "next/link";

import styles from "../page.module.scss";

// ABOUT SITE
export default function AboutPage() {
  return (
    <section className={styles.aboutSection}>
      <h1 className={styles.aboutSection__title}>About Site</h1>

      <p>
        Design and creative for this site is by{" "}
        <Link
          href="https://www.glennmcclanan.com/"
          className={styles.aboutSection__link}
        >
          Glenn McClanan,{" "}
        </Link>{" "}
        Front End Developer at{" "}
        <Link
          href="https://riocreate.com/"
          className={styles.aboutSection__link}
        >
          Rio Create
        </Link>{" "}
        in New York City, using{" "}
        <Link href="https://nextjs.org/" className={styles.aboutSection__link}>
          Next.js
        </Link>{" "}
        and SCSS.
      </p>
        <p className={styles.aboutSection__listTitle}>
          Some other sites developed by Glenn McClanan and Rio Create include:
        </p>
        <ul className={styles.aboutSection__listSection}>
          <li>
            <Link
              href="https://winography.net/"
              className={styles.aboutSection__link}
            >
              Winography
            </Link>
          </li>
          <li>
            <Link
              href="https://fasterthan.net/"
              className={styles.aboutSection__link}
            >
              Faster Than
            </Link>
          </li>
          <li>
            <Link
              href="https://writeword.net/"
              className={styles.aboutSection__link}
            >
              The Write Word
            </Link>
          </li>
          <li>
            <Link
              href="https://verbing.ninja/"
              className={styles.aboutSection__link}
            >
              Verbing
            </Link>
          </li>
          <li>
            <Link
              href="https://seaorgan.net/"
              className={styles.aboutSection__link}
            >
              Sea Organ
            </Link>
          </li>
          <li>
            <Link
              href="https://www.copoecolher.com//"
              className={styles.aboutSection__link}
            >
              Copo e colher
            </Link>
          </li>
        </ul>
    </section>
  );
}
