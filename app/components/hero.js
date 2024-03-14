import styles from "./hero.module.scss";


export default function Hero() {
  const bgVideo = "/videos/pondsample.mp4";
  return (
    <section className={styles.hero}>
      <video  src={bgVideo}
        type="video/mp4"
        autoPlay
        loop
        muted
        playsInline
        className={styles.hero__video}
         >
        Your browser does not support the video tag.
      </video>
      <div className={styles.hero__content}>
        <h1 className={styles.hero__title}>
          Expert advice for pond & lake management.
        </h1>
        <p className={styles.hero__subtitle}>
          Professional environmental consulting for the unique needs of your
          pond or lake.
        </p>
        <p className={styles.hero__subtitle}>Serving New York & New Jersey.</p>
        <p className={styles.hero__subtitle}>Call us at 914-867-5309</p>
      </div>
    </section>
  );
}
