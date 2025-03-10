import styles from "./page.module.scss";
import Cards from "../components/cards";
import { successStories } from "../data/success-stories";

export default function SuccessPage() {
  return (
    <section className={styles.success}>
      <div className={styles.success__videoBackground}>
        <video autoPlay muted loop playsInline preload>
          <source src="/videos/pond-bg-success.mp4" type="video/mp4" />
          <img src="/images/screenshots/pond-bg-success.jpg" alt="Fallback Image" preload />
        </video>
      </div>
      <div className={styles.success__content}>
        <div>
        <h1 className={styles.success__header}>Success Stories</h1>
        <p className={styles.success__subheader}>
          Little Bear has achieved successful results on a range of projects
          throughout New York and New Jersey.
        </p>
        </div>
        <Cards cardcontent={successStories} />
      </div>
    </section>
  );
}