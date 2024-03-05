import styles from "./hero.module.scss";

import Image from 'next/image'
export default function Hero() {
  return (
    <section className={styles.hero}>
        {/* <Image src="/images/pond-hero.jpg" alt="Pond Hero" className={styles.hero__image} width={900} height={200} /> */}
        {/* <div className={styles.hero__image}>
            <Image src="/images/pond-hero.jpg" alt="Pond Hero" width={900} height={200} />
        </div> */}
        <div className={styles.hero__content}>
            <h1 className={styles.hero__title}>Expert advice for pond & lake management.</h1>
            <p className={styles.hero__subtitle}>Professional consulting for the unique needs of your pond or lake.</p>
            <p className={styles.hero__subtitle}>Serving New York & New Jersey.</p>
            <p className={styles.hero__subtitle}>Call us at 914-867-5309</p>
        </div>
    </section>
  )
}
