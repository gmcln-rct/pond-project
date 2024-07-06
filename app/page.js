import styles from "./page.module.scss";

import Hero from "./components/hero";
import HighlightContainer from "./components/highlight-container";
import ContactForm from "./components/contact-form";
import SocialMediaContainer from "./components/social-media-container";

import { infoUnitsData } from "./data/highlights";



export default function Home() {
  return (
    <>
        <Hero />
        <SocialMediaContainer />
        <HighlightContainer infoUnitsData={infoUnitsData}/>
        <ContactForm />
    </>
  );
}
