import styles from "./page.module.scss";

import Hero from "./components/hero";
import SuccessStories from "./success/page";
import InfoUnit from "./components/infounit";
import InfoContainer from "./components/info";

export default function Home() {
  return (
    <>
      <section className={styles.main}>
        <Hero />
        <InfoContainer />
        {/* <SuccessStories /> */}
        {/* <div className={styles.homepage__container}>
          <InfoUnit />
          <InfoUnit />
          <InfoUnit />
          <InfoUnit />
        </div> */}
      </section>
    </>
  );
}
