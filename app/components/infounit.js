import styles from "./infounit.module.scss";

import Image from "next/image";

export default function infounit() {
  return (
    <section className={styles.infounit}>
        <div className={styles.infounit__section}>TEST</div>
        <div className={styles.infounit__section}>
            <Image src="/images/pond-temp-1.jpg" alt="Pond Hero" className={styles.infounit__image} width={200} height={200} />
        </div>
        </section>
  )
}
