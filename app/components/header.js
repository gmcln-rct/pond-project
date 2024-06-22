"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import styles from "./header.module.scss";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { services } from "../data/services";

// import ContactBar from "./contact-bar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const servicesDropdown = services.map((service) => (
    <Link key={service.id} href={`/services/${service.id}`}>
      {service.navText}
    </Link>
  ));

  return (
    <>
      <nav className={styles.navBar}>
      <div className={styles.navBar__navContainer}>
        <Link className={styles.navBar__brandcontainer} href="/">
          <Image
            src="/images/pond-logo - v2.png"
            alt="Little Bear Environmental"
            className={styles.navBar__brandlogo}
            width={200}
            height={60}
            layout={"responsive"}
            objectFit={"contain"}
          />
        </Link>
        <div className={styles.navBar__linkscontainer}>
          <div
            className={`${styles.navBar__links} ${isOpen ? styles.open : ""}`}
          >
            <div className={styles.navBar__servicesDropdown}>
              <Link href="/services">Services</Link>
              <div className={styles.navBar__servicesDropdownContent}>
                {servicesDropdown}
              </div>
            </div>{" "}
            <Link href="/certifications">Certifications</Link>
            <Link href="/success">Success Stories</Link>
            <Link href="/labels">Labels</Link>
            <Link href="/contact" className={styles.navBar__ctaMobile}>
              Contact Us
            </Link>
          </div>
        </div>
        </div>
        <div className={styles.navBar__ctacontainer}>
          <Link href="/contact" className={styles.navBar__ctaDesktop}>
            <button className={styles.navBar__cta}>Contact Us</button>
          </Link>
          <button className={styles.navBar__toggle} onClick={toggleMenu}>
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>
      {/* <ContactBar /> */}
    </>
  );
}
