import Link from 'next/link';
import Image from 'next/image';

import Instagram from '@mui/icons-material/Instagram';

import styles from "./social-media-container.module.scss";


const SocialMediaContainer = () => {
  return (
    <section className={styles.socialMedia} >
        Follow Little Bear on 
         <Link className={styles.socialMedia__link} href="http://www.instagram.com/littlebearenvironmental">
          Instagram
          <Instagram className={styles.socialMedia__icon} />
        {/* <Image className={styles.socialMedia__icon} src="/images/instagram.png" alt="Instagram" width={50} height={50} /> */}
        </Link>
    </section>
  )
}

export default SocialMediaContainer