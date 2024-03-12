import styles from "./page.module.scss";

import Cards from "../components/cards";

export default function ServicesPage() {
  // const services = [
  //   "Pond & Lake Management",
  //   "Environmental Permits",
  //   "Invasive Species Management & Restoration",
  //   "Environmental Project Management",
  //   "Ecological Surveys & Mapping",
  //   "Water Quality & Ecosystem Health Monitoring",
  //   "Educational Outreach & Community Engagement",
  //   "Grant Writing & Environmental Compliance"
  // ];

  const services = [
    {
      title: "Pond & Lake Management",
      description:
        "Monitoring water quality helps determine the health of aquatic ecosystems. Imbalances in water quality can make it inhabitable for life or cause algal bloom.",
    },
    {
      title: "Environmental Permits",
      description:
        "Preparing environmental permits and grant applications for pond and lake management projects.",
    },
    {
      title: "Invasive Species Management & Restoration",
      description:
        "Invasive species are plants, animals, or pathogens that are non-native to the ecosystem under consideration and whose introduction causes or is likely to cause harm.",
    },
    {
      title: "Environmental Project Management",
      description:
        "Environmental project management is the process of planning, organizing, and overseeing the implementation of environmental projects.",
    },
    {
      title: "Ecological Surveys & Mapping",
      description:
        "Ecological surveys and mapping are used to determine the distribution and abundance of species and ecosystems.",
    },
    {
      title: "Water Quality & Ecosystem Health Monitoring",
      description:
        "Water quality testing is an important part of environmental monitoring. When water quality is poor, it affects not only aquatic life but the surrounding ecosystem as well.",
    },
    {
      title: "Educational Outreach & Community Engagement",
      description:
        "Educational outreach and community engagement are essential components of environmental management.",
    },
    {
      title: "Grant Writing & Environmental Compliance",
      description:
        "Grant writing and environmental compliance are important aspects of environmental management.",
    },
  ];

  return (
    <section className={styles.services}>
      <h1 className={styles.services__header}>Our Services</h1>
      <p className={styles.services__subheader}>
        We provide a variety of enviornmental services:
      </p>
      {/* <details className={styles.services__details}>
        <summary>Certifications</summary>
        <p>Our services include:</p> */}

      {/* {services.map((service, index) => (
        <details key={index} className={styles.services__details}>
          <summary className={styles.services__title}>{service.title}</summary>
          <p className={styles.services__description}>{service.description}</p>
        </details>
      ))} */}
      <Cards />
    </section>
  );
}
