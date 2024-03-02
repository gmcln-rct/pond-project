import styles from './not-found.module.scss';

export default function Custom404() {
  return (
    <section className={styles.notFound}>
      <h1>Your page was not found.</h1>
    </section>
  );
}