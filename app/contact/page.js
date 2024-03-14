import styles from "./page.module.scss";

import ContactForm from "../components/contactform";

export default function ContactPage() {
  return (
    <section className={styles.contact}>
      <ContactForm />
    </section>
  )
}
