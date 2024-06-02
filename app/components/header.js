import Link from "next/link";
import Image from "next/image";

import styles from "./header.module.scss";

import InfoRoundedIcon from "@mui/icons-material/InfoRounded";

export default function Header() {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navBar__linkscontainer}>
        <Link className={styles.navBar__brandcontainer} href="/">
          <Image
            src="/images/pond-test.png"
            alt="Little Bear Logo"
            className={styles.navBar__brandlogo}
            width={75}
            height={75}
          />
          <Image
            src="/images/Little Bear - logo - text.png"
            alt="Little Bear Environmental"
            className={styles.navBar__brandlogo}
            width={200}
            height={75}
          />
          {/* <span className={styles.navBar__brandtext}>Little Bear Environmental</span> */}
        </Link>
        <div className={styles.navBar__links}>
          <Link href="/services">Services</Link>
          <Link href="/certifications">Certifications</Link>

          <Link href="/success">Success Stories</Link>
          <Link href="/labels">Labels</Link>
          {/* <Link href="/about">About Us</Link> */}
        </div>
      </div>
      <div className={styles.navBar__ctacontainer}>
        <Link href="/contact">
          <button className={styles.navBar__cta}>Contact Us</button>
        </Link>
      </div>
    </nav>
  );
}
