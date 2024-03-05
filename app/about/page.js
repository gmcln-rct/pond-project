import Link from "next/link";

import styles from "./page.module.scss";

export default function AboutPage() {
  return (
    <section className={styles.aboutSection}>
      <h1 className={styles.aboutSection__title}>
        LBE Environnmental Consulting
      </h1>
      
      <p className={styles.aboutSection__content}>
        With over a decade of experience in natural resources, Nicole White is a Certified Lake Manager, with the North American Lake
        Management Society. In 2021, Nicole was elected to the North American
        Lake Management Society Board of Directors as Region 2 Director
        (NY/NJ/Puerto Rico).
      </p>
      <p className={styles.aboutSection__content}>
        Nicole has experience in water quality monitoring, biological
        assessment, environmental permitting, and invasive species management.
        She has enjoyed working with a variety of stakeholders at the state and
        municipal level as well as a non-profit groups and private landowners.
      </p>
      <p className={styles.aboutSection__content}>
        Little Bear Environmental is proud to be a Lower Hudson Partnership for
        Regional Invasive Species Management (LHPRISM) Partner.
      </p>

      <p className={styles.aboutSection__content}>
        Nicole is a member of the North American Lake Management Society, New
        York State Federation of Lake Associations, and the New Jersey Lake
        Management Society.
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
