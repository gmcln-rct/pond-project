import Link from 'next/link';
import Image from 'next/image';

import styles from "./social-media-container.module.scss";


const SocialMediaContainer = () => {
  return (
    <section className={styles.socialMedia} >
        Follow Little Bear on 
         <Link className={styles.socialMedia__link} href="http://www.instagram.com/littlebearenvironmental">
          Instagram
        <Image className={styles.socialMedia__icon} src="/images/instagram.png" alt="Instagram" width={50} height={50} />
        </Link>
    </section>
  )
}

export default SocialMediaContainer