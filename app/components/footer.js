import React from "react";

import Link from "next/link";
import styles from "./footer.module.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__links}>
        <Link href="/about/littlebear">About Little Bear</Link>
        <Link href="/about/site">About Site</Link>

        <Link href="/services">Services</Link>
        <Link href="/success">Success Stories</Link>
        <Link href="/contact">Contact Us</Link>
      </div>

      <p> ©{currentYear} Little Bear Enviornmental. All Rights Reserved.</p>
    </footer>
  );
}
