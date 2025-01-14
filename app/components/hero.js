import styles from "./hero.module.scss";


export default function Hero() {
  const bgVideo = "/videos/pond-bg-hero.mp4";
  return (
    <section className={styles.hero}>
      <video  src={bgVideo}
        type="video/mp4"
        poster="/images/screenshots/pond-bg-hero.jpg"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className={styles.hero__video}
         >
        Your browser does not support the video tag.
      </video>
      <div className={styles.hero__content}>
        <h1 className={styles.hero__title}>
          Expert Pond & Lake Management
        </h1>
        <p className={styles.hero__subtitle}>
          Professional environmental consulting serving New York & New Jersey</p>
        {/* <p className={styles.hero__subtitle}>Contact us at <a className={styles.hero__phoneLink} href="tel:914-867-5309">914-867-5309</a></p> */}
      </div>
    </section>
  );
}
