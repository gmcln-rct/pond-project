// components/Card.js
import Link from "next/link";
import Image from "next/image";

import styles from "./card.module.scss";

export default function Card({ photo, title, text, image, id }) {

    function truncateBasedOnWordCount(text, max) {
        return text.split(" ").slice(0, max).join(" ");
    }
//   function truncateWithEllipses(text, max) {
//     return text.substr(0, max - 1);
//   }

  const truncatedText = truncateBasedOnWordCount(text, 20);
  return (
    <div className={styles.card}>
      <Image className={styles.card__image} src={photo} alt="Card Image" width={300} height={200} />
      <div className={styles.card__content}>
        <h2>{title}</h2>
        <p>{truncatedText}...</p>
      </div>
        <Link className={styles.card__button} href={`/success/${id}`}>
          More
        </Link>
    </div>
  );
}
