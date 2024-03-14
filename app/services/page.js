import styles from "./page.module.scss";

import Cards from "../components/cards";

import { services } from "../data/services";

export default function ServicesPage() {


  return (
    <section className={styles.services}>
      <h1 className={styles.services__header}>Our Services</h1>
      <p className={styles.services__subheader}>
        We provide a variety of enviornmental services:
      </p>
      <Cards cardcontent={services}/>
    </section>
  );
}
