import styles from "./page.module.scss";

import Hero from "./components/hero";
import SuccessStories from "./success/page";
import InfoUnit from "./components/infounit";
import InfoContainer from "./components/info";
import ContactForm from "./components/contactform";

const homePageInfoData = [
  {
    title: "Pond & Lake Management",
    description: "Monitoring water quality helps determine the health of aquatic ecosystems. Imbalances in water quality can make it inhabitable for life or cause algal bloom.",
    image: "/images/pond-temp-1.jpg",
    imagePlacement: "left",
  },
  {
    title: "Pest Control",
    description: "Pest control is the regulation or management of a species defined as a pest, a member of the animal kingdom that impacts adversely on human activities.",
    image: "/images/pond-temp-6.jpg",
    imagePlacement: "right",
  },
  {
    title: "Invasive Species Management",
    description: "Invasive species are plants, animals, or pathogens that are non-native to the ecosystem under consideration and whose introduction causes or is likely to cause harm.",
    image: "/images/pond-temp-5.jpg",
    imagePlacement: "left",
  },
  {
    title: "Environmental Permits & Grants",
    description: "Preparing environmental permits and grant applications for pond and lake management projects.",
    image: "/images/pond-temp-7.jpg",
    imagePlacement: "right",
  },
  {
    title: "Water Quality Testing",
    description: "Water quality testing is an important part of environmental monitoring. When water quality is poor, it affects not only aquatic life but the surrounding ecosystem as well.",
    image: "/images/pond-temp-8.jpg",
    imagePlacement: "left",
  },
];

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Hero />
        <InfoContainer infoUnitsData={homePageInfoData}/>
        <ContactForm />
      </main>
    </>
  );
}
