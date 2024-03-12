// components/Card.js
import Link from 'next/link';
import Image from 'next/image';

export default function Card ({ photo, text, slug }) {
  return (
    <div className="card">
        <Image src={photo} alt="Card Image" width={300} height={200} />
      <div className="card-content">
        <p>{text}</p>
        <Link href={`/details/${slug}`}>
          <button>More</button>
        </Link>
      </div>
    </div>
  );
};
