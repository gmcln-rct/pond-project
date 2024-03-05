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
            alt="Verbing Logo"
            className={styles.navBar__brandlogo}
            width={75}
            height={75}
          />

          <span className={styles.navBar__brandtext}>Ponder</span>
        </Link>
        <div className={styles.navBar__links}>
          <Link href="/services">Services</Link>

          <Link href="/success">Success Stories</Link>
          <Link href="/about">About Us</Link>
        </div>
      </div>
      <div className={styles.navBar__ctacontainer}>
        <Link href="/contact">
          <button className={styles.navBar__cta}>Schedule Free Visit</button>
        </Link>
      </div>
    </nav>
  );
}
