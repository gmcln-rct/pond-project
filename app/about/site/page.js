import Link from "next/link";

import styles from "../page.module.scss";

// ABOUT SITE
export default function AboutPage() {
  return (
    <section className={styles.aboutSection}>
      <h1 className={styles.aboutSection__title}>
        About LBE Environnmental
      </h1>

      <p className={styles.aboutSection__content}>The site was was created and designed by New York-based Front End Developer <a href="https://www.glennmcclanan.com/">Glenn McClanan</a> of <a href="https://riocreate.com/">Rio Create</a> using <a href="https://nextjs.org/">Next.js</a> and SCSS.</p>     
      <p className={styles.aboutSection__content}>
        Nicole is a Certified Lake Manager, with the North American Lake
        Management Society. In 2021, Nicole was elected to the North American
        Lake Management Society Board of Directors as Region 2 Director
        (NY/NJ/Puerto Rico).
      </p>

        <h2 className={styles.aboutSection__listTitle}> Nicole is a current member of the following organizations:</h2>
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
