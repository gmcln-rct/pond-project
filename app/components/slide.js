import styles from "./slide.module.scss";

export default function Slide(props) {
  const { currentConjugation } = props;

  return (
    <section className={styles.slideContainer}>
      <div className={styles.slideContainer__row}>
        <span className={styles.slideContainer__col}>eu</span>
        <span className={styles.slideContainer__col2}>
          {currentConjugation.eu}
        </span>
      </div>

      <div className={styles.slideContainer__row}>
        <span className={styles.slideContainer__col}>vôce</span>
        <span className={styles.slideContainer__col2}>
          {currentConjugation.ele}
        </span>
      </div>

      <div className={styles.slideContainer__row}>
        <span className={styles.slideContainer__col}>ele/ela</span>
        <span className={styles.slideContainer__col2}>
          {currentConjugation.ele}
        </span>
      </div>

      <div className={styles.slideContainer__row}>
        <span className={styles.slideContainer__col}>nos</span>
        <span className={styles.slideContainer__col2}>
          {currentConjugation.nos}
        </span>
      </div>

      <div className={styles.slideContainer__row}>
        <span className={styles.slideContainer__col}>eles/elas</span>
        <span className={styles.slideContainer__col2}>
          {currentConjugation.eles}
        </span>
      </div>
    </section>
  );
}
