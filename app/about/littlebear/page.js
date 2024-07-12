import Link from "next/link";

import styles from "../page.module.scss";

// ABOUT LITTLE BEAR ENVIRONMENTAL
export default function AboutPage() {
  return (
    <section className={styles.aboutSection}>
      <h1 className={styles.aboutSection__title}>
        About Little Bear Environmental
      </h1>

      <p className={styles.aboutSection__content}>
        With over a decade of experience in natural resources, Nicole White,
        CLM, formed Little Bear Environmental Consulting LLC in 2017.
      </p>
      <p className={styles.aboutSection__content}>
        Nicole is a Certified Lake Manager, with the North American Lake
        Management Society. In 2021, Nicole was elected to the North American
        Lake Management Society Board of Directors as Region 2 Director
        (NY/NJ/Puerto Rico).
      </p>
      <p className={styles.aboutSection__content}>
        Nicole has experience in water quality monitoring, biological
        assessment, environmental permitting, and invasive species management.
        She has enjoyed working with a variety of stakeholders at the state and
        municipal level as well as a non-profit groups and private landowners.{" "}
      </p>
      <p className={styles.aboutSection__content}>
      </p>
      <p className={styles.aboutSection__content}>
        Nicole is a current member of the following organizations:
      </p>
      <ul className={styles.aboutSection__list}>
        <li>North American Invasive Species Management Association (NAISMA)</li>
        <li>North American Lake Management Society (NALMS)</li>
        <li>Northeast Aquatic Plant Management Society (NEAPMS)</li>
        <li>Hudson River Sloop Clearwater</li>
        <li> New York State Federation of Lake Associations (NYSFOLA)</li>
        <li>New York Chapter of the American Fisheries Society</li>
      </ul>
    </section>
  );
}
