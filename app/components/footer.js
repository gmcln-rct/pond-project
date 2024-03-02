import React from 'react';
import styles from "./footer.module.scss";

export default function Footer() {
    const currentYear = new Date().getFullYear()
  return (
    <footer className={styles.footer}>©{currentYear} Rio Create LLC. All Rights Reserved.</footer>
  )
}
