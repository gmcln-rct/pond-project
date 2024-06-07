import styles from "./page.module.scss";

import Cards from "../components/cards";

import { successStories } from "../data/success-stories";

export default function SuccessPage() {
  return (
    <section className={styles.success}>
      <h1 className={styles.success__header}>Success Stories</h1>
      <p className={styles.success__subheader}>
        Little Bear has achieved successful results on a variety of projects
        throughout New York and New Jersey.
      </p>

      <Cards cardcontent={successStories} />
    </section>
  );
}
