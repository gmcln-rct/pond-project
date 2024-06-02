import styles from "./page.module.scss";

import Cards from "../components/cards";

import { successStories } from "../data/success-stories";

export default function SuccessPage() {
  return (
    <section className={styles.services}>
      <h1 className={styles.services__header}>Success Stories</h1>
      <p className={styles.services__subheader}>
        Little Bear has achieved successful results on a variety of projects
        throughout New York and New Jersey.
      </p>

      <Cards cardcontent={successStories} />
    </section>
  );
}
