import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from "./header.module.scss";

import InfoIcon from '@mui/icons-material/Info';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';

export default function Header() {
  return (
    <nav className={styles.navBar} >
        <Link className={styles.navBrandContainer} href="/">
          <Image src="/images/verbing-ninja.png" alt="Verbing Logo" className={styles.brandLogoSm} width={50} height={50} />
          <Image src="/images/verbing-ninja.png" alt="Verbing Logo" className={styles.brandLogoLg} width={75} height={75} />
          <Image src="/images/verbing-brand-white.png" alt="Verbing Brand Name" className={styles.brandTextSm} width={100} height={16} />
          <Image src="/images/verbing-brand-white.png" alt="Verbing Brand Name" className={styles.brandTextLg} width={200} height={33} />
          {/* <span  className={styles.navBrand}>Verbing</span> */}
        </Link>
        <div className={styles.navLinks}>
          {/* <Link href="/verbs">
            Flashcards
          </Link> */}
          {/* <Link href="/quiz">
            Quiz
          </Link> */}
          <Link href="/about">
            <InfoRoundedIcon className={styles.navIcon} sx={{ fontSize: 40}} />
          </Link>
        </div>
    </nav>
  )
}

