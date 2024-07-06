"use client";

import Link from "next/link";
import Image from "next/image";

import { useState, useEffect } from "react";

import styles from "./header.module.scss";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { services } from "../data/services";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300); // Match this with the transition duration in SCSS
  };

  const toggleMenu = () => {
    if (isOpen) {
      closeMenu();
    } else {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
        setIsClosing(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const servicesDropdown = services.map((service) => (
    <Link key={service.id} href={`/services/${service.id}`} onClick={closeMenu}>
      {service.navText}
    </Link>
  ));

  return (
    <>
      <nav className={styles.navBar}>
        <div className={styles.navBar__navContainer}>
          <Link
            className={styles.navBar__brandcontainer}
            href="/"
            onClick={closeMenu}
          >
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
              className={`${styles.navBar__links} ${
                isOpen ? styles.open : ""
              } ${isClosing ? styles.closing : ""}`}
            >
              <div className={styles.navBar__servicesDropdown}>
                <Link href="/services" onClick={toggleMenu}>
                  Services
                </Link>
                <div className={styles.navBar__servicesDropdownContent}>
                  {servicesDropdown}
                </div>
              </div>{" "}
              <Link href="/certifications" onClick={toggleMenu}>
                Certifications
              </Link>
              <Link href="/success" onClick={toggleMenu}>
                Success Stories
              </Link>
              <Link href="/labels" onClick={toggleMenu}>
                Labels
              </Link>
              <Link
                href="/contact"
                className={styles.navBar__ctaMobile}
                onClick={closeMenu}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.navBar__ctacontainer}>
          <Link
            href="/contact"
            className={styles.navBar__ctaDesktop}
            onClick={closeMenu}
          >
            <button className={styles.navBar__cta}>Contact Us</button>
          </Link>
          <button className={styles.navBar__toggle} onClick={toggleMenu}>
            {isOpen ? (
              <CloseIcon fontSize="large" />
            ) : (
              <MenuIcon fontSize="large" />
            )}
          </button>
        </div>
      </nav>
    </>
  );
}
