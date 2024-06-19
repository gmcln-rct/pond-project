import styles from "./page.module.scss";

import Hero from "./components/hero";
import SuccessStories from "./success/page";
import InfoUnit from "./components/info-unit";
import InfoContainer from "./components/info";
import ContactForm from "./components/contactform";
import SocialMediaContainer from "./components/social-media-container";

import { infoUnitsData } from "./data/highlights";



export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Hero />
        <SocialMediaContainer />
        <InfoContainer infoUnitsData={infoUnitsData}/>
        <ContactForm />
      </main>
    </>
  );
}
