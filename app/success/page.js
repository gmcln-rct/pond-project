import styles from "../services/page.module.scss";

import Cards from "../components/cards";

import { successStories } from "../data/success-stories";


export default function SuccessPage() {
  // const services = [
  //   {
  //     title: "New Jersey Aquatic Invasive Species Managment Plant",
  //     client: "NJ Department of Environmental Protection",
  //     duration: "Jan 2023-Present",
  //     image: "/images/pond-success-1.webp",
  //     description:
  //       "Little Bear has been contracted to work with NJDEP, NJ Water Supply Authority, NJFWS, and local stakeholders to develop the NJ AISMP. Creation of the following sections of the plan: introduced species in New Jersey, Pathways for exisiting & potential AIS introdutions, Exisitng and potential AIS species list and species profiles, Legislative/regulation recommendations, education & outreach opportunities, ecological risk assessments and prioritzation, statewide reporting database, rapid response plan.",
  //   },
  //   {
  //     title: "Lake Sebago Hydrilla Control Project",
  //     client: "Natural Heritage Trust / NYS Office of Parks, Recreation, & Historic Preservation",

  //     duration: "2022-Present",
  //     image: "/images/pond-success-2.jpg",
  //     description:
  //       "Hydrilla was discovered in Lake Sebago in 2022. Nicole was part of the response team and conducted a full-scale plant survey, tuber survey, and is currently creating a Management Plan in coordination with the NYS Office of Parks, Recreation, and Historic Preservation and NYSDEC. Little Bear has been contracted by the Natural Heritage Trust to manage the control project.",
  //   },
  //   {
  //     title: "New Jersey Aquatic Invasive Species Managment Plant",
  //     client: "NJ Department of Environmental Protection",

  //     duration: "Jan 2023-Present",
  //     image: "/images/pond-success-1.webp",
  //     description:
  //       "Little Bear has been contracted to work with NJDEP, NJ Water Supply Authority, NJFWS, and local stakeholders to develop the NJ AISMP. Creation of the following sections of the plan: introduced species in New Jersey, Pathways for exisiting & potential AIS introdutions, Exisitng and potential AIS species list and species profiles, Legislative/regulation recommendations, education & outreach opportunities, ecological risk assessments and prioritzation, statewide reporting database, rapid response plan.",
  //   },
  // ];

  return (
    <section className={styles.services}>
      <h1 className={styles.services__header}>Success Stories</h1>
      <p className={styles.services__subheader}>
        Little Bear has achieved successful results on a variety of projects throughout
        New York and New Jersey.
      </p>

      <Cards cardcontent={successStories} />
      {/* <details className={styles.services__details}>
        <summary>Certifications</summary>
        <p>Our services include:</p> */}

      {/* {services.map((service, index) => (
        <details key={index} className={styles.services__details}>
          <summary className={styles.services__title}>{service.title}</summary>
          <div className={styles.services__headSection}>
            <Image
              src={service.image}
              alt={service.title}
              width={300}
              height={300}
            />
            <div className={styles.services__clientSection}>
              <p>Client: </p>
              <p className={styles.services__client}>{service.client}</p>
              <p>Project Involvement: </p>
              <p className={styles.services__client}>{service.duration}</p>
            </div>
          </div>
          <p className={styles.services__description}>{service.description}</p>
        </details>
      ))} */}
      {/* <ul>
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul> */}
    </section>
  );
}
