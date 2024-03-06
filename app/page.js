import styles from "./page.module.scss";

import Hero from "./components/hero";
import SuccessStories from "./success/page";
import InfoUnit from "./components/infounit";
import InfoContainer from "./components/info";
import ContactForm from "./components/contactform";

export default function Home() {
  return (
    <>
      <section className={styles.main}>
        <Hero />
        <InfoContainer />
        <ContactForm />

      </section>
    </>
  );
}
