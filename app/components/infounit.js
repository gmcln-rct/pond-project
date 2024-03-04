import styles from "./infounit.module.scss";

import Image from "next/image";

export default function infounit() {
  return (
    <section className={styles.infounit}>
        <div className={styles.infounit__section}>
            <h2 className={styles.infounit__title}>Pond & Lake Management</h2>
            <p className={styles.infounit__description}>Monitoring water quality helps determine the health of aquatic ecosystems. Imbalances in water quality can make it inhabitable for life or cause algal bloom.</p>
        </div>
        <div className={styles.infounit__section}>
            <Image src="/images/pond-temp-1.jpg" alt="Pond Hero" className={styles.infounit__image} width={200} height={200} />
        </div>
        </section>
  )
}
