// components/Card.js
import Link from "next/link";
import Image from "next/image";

import styles from "./card.module.scss";

export default function Card({ photo, title, text, slug }) {
  function truncateWithEllipses(text, max) {
    return text.substr(0, max - 1);
  }

  const truncatedText = truncateWithEllipses(text, 100);
  return (
    <div className={styles.card}>
      <Image src={photo} alt="Card Image" width={300} height={200} />
      <div className="card-content">
        <p>{truncatedText}...</p>
        <Link href={`/details/${slug}`}>
          <button>More</button>
        </Link>
      </div>
    </div>
  );
}
