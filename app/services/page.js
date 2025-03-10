import styles from "./page.module.scss";

import Cards from "../components/cards";

import { services } from "../data/services";

export default function ServicesPage() {


  return (
    <section className={styles.services}>
      <div className={styles.services__videoBackground}>
        <video autoPlay muted loop playsInline preload>
          <source src="/videos/pond-bg-service.mp4" type="video/mp4" />
          <img src="/images/screenshots/pond-bg-service.jpg" alt="Fallback Image" preload />
        </video>
      </div>
      <h1 className={styles.services__header}>Our Services</h1>
      <p className={styles.services__subheader}>
        We provide a variety of enviornmental services:
      </p>
      <Cards cardcontent={services} isservices="true"/>
    </section>
  );
}
