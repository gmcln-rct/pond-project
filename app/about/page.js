import Link from "next/link";

import styles from "./page.module.scss";

export default function AboutPage() {
  return (
    <section className={styles.aboutSection}>
      <h1 className={styles.aboutSection__title}>About Verbing</h1>
      <p className={styles.aboutSection__content}>
        Verbing is a verb conjugation flashcard app for Brazilian Portuguese
        language learners (a.k.a. Language Ninjas). It is designed to help users
        learn the conjugation of the most common verbs in Brazilian Portuguese.
        More languages coming soon!
      </p>

      <p>
        The app was built using React, Next.js and SCSS. It was created,
        designed and developed by New York-based Front End Developer{" "}
        <Link
          className={styles.aboutSection__link}
          href="https://www.glennmcclanan.com/"
        >
          Glenn McClanan
        </Link>
        , who also created apps{" "}
        <Link
          className={styles.aboutSection__link}
          href="https://thewriteword.app/"
        >
          The Write Word
        </Link>
        ,{" "}
        <Link
          className={styles.aboutSection__link}
          href="https://winography.net/"
        >
          Winography
        </Link>{" "}
        and
        <Link
          className={styles.aboutSection__link}
          href="https://fasterthan.net/"
        >
          {" "}
          Faster Than
        </Link>
        .
      </p>
    </section>
  );
}
