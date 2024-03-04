
import Link from 'next/link'
import Image from 'next/image'

import styles from "./header.module.scss";

import InfoRoundedIcon from '@mui/icons-material/InfoRounded';

export default function Header() {
  return (
    <nav className={styles.navBar} >
        <Link className={styles.navBrandContainer} href="/">
          <Image src="/images/pond-test.png" alt="Verbing Logo" className={styles.brandLogoLg} width={75} height={75} />

          <span  className={styles.navBrand}>Ponder</span>
        </Link>
        <div className={styles.navLinks}>
          {/* <Link href="/services">
            Services
          </Link> */}
              {/* <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
        >
          Open Menu
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions" items={items}>
        {(item) => (
          <DropdownItem
            key={item.key}
            color={item.key === "delete" ? "danger" : "default"}
            className={item.key === "delete" ? "text-danger" : ""}
          >
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown> */}
          <Link href="/quiz">
            Success Stories
          </Link>
          <Link href="/about">
            <InfoRoundedIcon className={styles.navIcon} sx={{ fontSize: 40}} />
          </Link>
        </div>
    </nav>
  )
}

