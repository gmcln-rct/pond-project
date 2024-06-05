import Link from 'next/link';

import styles from "./contact-bar.module.scss";


const ContactBar = () => {
  return (
    <section className={styles.contactBar} >
         <Link className={styles.contactBar__link} href="/contact">
         Contact Us
        </Link>
    </section>
  )
}

export default ContactBar