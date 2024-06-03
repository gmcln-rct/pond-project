// components/Card.js
import Link from "next/link";
import Image from "next/image";

import styles from "./card.module.scss";

export default function Card({ isservices, photo, title, text, image, id }) {

    function truncateBasedOnWordCount(text, max) {
        return text.split(" ").slice(0, max).join(" ");
    }
//   function truncateWithEllipses(text, max) {
//     return text.substr(0, max - 1);
//   }

const url = isservices ? `/services/${id}` : `/success/${id}`;

  const truncatedText = truncateBasedOnWordCount(text, 20);
  return (
    <div className={styles.card}>
      <Image className={styles.card__image} src={image} alt="Card Image" width={300} height={200} />
      <div className={styles.card__content}>
        <h2 className={styles.card__title}>{title}</h2>
        <p className={styles.card__description}>{truncatedText}...</p>
      </div>
        <Link className={styles.card__button} href={url}>
          More
        </Link>
    </div>
  );
}
