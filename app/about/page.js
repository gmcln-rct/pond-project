import Link from "next/link";

import styles from "./page.module.scss";

export default function AboutPage() {

  const aboutInfo = [
    {
      title: "Certifications",
      description:
        "Monitoring water quality helps determine the health of aquatic ecosystems. Imbalances in water quality can make it inhabitable for life or cause algal bloom.",
    },
    {
      title: "Background",
      description:
        "Nicole has experience in water quality monitoring, biologicalassessment, environmental permitting, and invasive species management. She has enjoyed working with a variety of stakeholders at the state and municipal level as well as a non-profit groups and private landowners.",
    },
    {
      title: "Memberships",
      description:
        "        Little Bear Environmental is proud to be a Lower Hudson Partnership for Regional Invasive Species Management (LHPRISM) Partner. Nicole is a member of the North American Lake Management Society, New York State Federation of Lake Associations, and the New Jersey Lake Management Society.",
    },
    {
      title: "Current and Previous Clients",
      description:
        "        Little Bear Environmental is proud to be a Lower Hudson Partnership for Regional Invasive Species Management (LHPRISM) Partner. Nicole is a member of the North American Lake Management Society, New York State Federation of Lake Associations, and the New Jersey Lake Management Society.",
    },
    
  ];
  return (
    <section className={styles.aboutSection}>
      <h1 className={styles.aboutSection__title}>
        LBE Environnmental Consulting
      </h1>
      
      <p className={styles.aboutSection__content}>
        With over a decade of experience in natural resources, Nicole White Nicole formed Little Bear Environmental Consulting LLC in 2017.
      </p>
      {aboutInfo.map((service, index) => (
  <details key={index} className={styles.services__details}>
    <summary className={styles.services__title}>{service.title}</summary>
    <p className={styles.services__description}>{service.description}</p>

      </details>
    ))}

      <p className={styles.aboutSection__content}>

      </p>
      <p className={styles.aboutSection__content}>

      </p>
      <p className={styles.aboutSection__content}>
        Current and past clients include:
        </p>
        <ul className={styles.aboutSection__list}>
          <li>New York State Office of Parks, Recreation, & Historic Preservation</li>
          <li>New York Natural Heritage Trust</li>
          <li>New Jersey Department of Environmental Protection, Bureau of Science and Research</li>
          <li>New York State Department of Environmental Conservation-Invasive Species Coordination Section</li>
          <li>Dewberry</li>
          <li>United States Army Corps of Engineers</li>
        </ul>
    </section>
  );
}
