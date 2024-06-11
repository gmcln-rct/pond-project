import styles from "./page.module.scss";
import Cards from "../components/cards";
import { successStories } from "../data/success-stories";

export default function SuccessPage() {
  return (
    <section className={styles.success}>
      <div className={styles.success__videoBackground}>
        <video autoPlay muted loop playsInline>
          <source src="/videos/pond-bg-1.mp4" type="video/mp4" />
          <img src="/images/pond-bg-temp.jpg" alt="Fallback Image" />
        </video>
      </div>
      <div className={styles.success__content}>
        <div>
        <h1 className={styles.success__header}>Success Stories</h1>
        <p className={styles.success__subheader}>
          Little Bear has achieved successful results on a variety of projects
          throughout New York and New Jersey.
        </p>
        </div>
        <Cards cardcontent={successStories} />
      </div>
    </section>
  );
}