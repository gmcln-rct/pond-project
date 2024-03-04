import styles from "./page.module.scss";

import Hero from "./components/hero";
import SuccessStories from "./success/page";
import InfoUnit from "./components/infounit";

export default function Home() {

  return (
    <>
      <section className={styles.main}>
        <Hero />
        <SuccessStories />
        <InfoUnit />
      </section>
    </>
  );
}
