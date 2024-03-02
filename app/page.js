import styles from "./page.module.scss";

import VerbList from "./components/verb-list";

export default function Home() {

  return (
    <>
      <section className={styles.main}>
        <VerbList />
      </section>
    </>
  );
}
