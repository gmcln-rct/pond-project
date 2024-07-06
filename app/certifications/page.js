import InfoContainer from "../components/info-container";

import { certificationData } from "../data/certifications";

import styles from "./page.module.scss";

const certificationStyleClass = "certification";

export default function Certifications() {
  return (
    <section className={certificationStyleClass}>
      <div className={styles.certificationsPage__header}>
        <h1>Certifications</h1>
        <p className={styles.certificationsPage__description}>
          Little Bear has certifications and partnerships with a range of environmental agencies and organizations.
        </p>
      </div>
      <InfoContainer infoUnitsData={certificationData} />
    </section>
  );
}
