import styles from "./contactform.module.scss";

export default function ContactForm() {
  return (
    <section className={styles.contact}>
    <form className={styles.contact__form}>
      <h1 className={styles.contact__title}>Contact us to learn more about our services.</h1>
      <label className={styles.contact__label}>
        Name:
        <input className={styles.contact__input}type="text" name="name" />
      </label>
      <label className={styles.contact__label}>
        Email:
        <input className={styles.contact__input}type="text" name="email" />
      </label>
      <label className={styles.contact__label}>
        Phone:
        <input className={styles.contact__input}type="number" name="phone" />
      </label>

      <label className={styles.contact__label}>
        Message:
        <textarea name="message" />
        </label>
        <input className={styles.contact__button}type="submit" value="Submit" />
    </form>
    </section>
  )
}
