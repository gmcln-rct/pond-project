// components/Cards.js
import Card from './card';

import styles from './cards.module.scss';

import {successStories} from '../data/success-stories';

const cards = [
  {
    photo: '/images/pond-temp-1.jpg',
    title: "Pond & Lake Management",
    description:
      "Monitoring water quality helps determine the health of aquatic ecosystems. Imbalances in water quality can make it inhabitable for life or cause algal bloom.",
    slug: 'card-1',
  },
  {
    photo: '/images/pond-temp-2.jpg',
    title: "Environmental Permits",
    description:
      "Preparing environmental permits and grant applications for pond and lake management projects.",
    slug: 'card-2',
  },
  {
    photo: '/images/pond-temp-3.jpg',
    title: "Pond & Lake Management",
    description:
      "Monitoring water quality helps determine the health of aquatic ecosystems. Imbalances in water quality can make it inhabitable for life or cause algal bloom.",
    slug: 'card-2',
  },
  {
    photo: '/images/pond-temp-4.jpg',
    title: "Pond & Lake Management",
    description:
      "Monitoring water quality helps determine the health of aquatic ecosystems. Imbalances in water quality can make it inhabitable for life or cause algal bloom.",
    slug: 'card-2',
  },
  {
    photo: '/images/pond-temp-5.jpg',
    title: "Pond & Lake Management",
    description:
      "Monitoring water quality helps determine the health of aquatic ecosystems. Imbalances in water quality can make it inhabitable for life or cause algal bloom.",
    slug: 'card-2',
  },
  {
    photo: '/images/pond-temp-6.jpg',
    title: "Pond & Lake Management",
    description:
      "Monitoring water quality helps determine the health of aquatic ecosystems. Imbalances in water quality can make it inhabitable for life or cause algal bloom.",
    slug: 'card-2',
  },
  // Add more card objects as needed
];

export default function Cards() {
  return (
    <div className={styles.cards}>
      {successStories.map((card, index) => (
        <Card
          key={index}
          photo={card.image}
          title={card.title}
          text={card.description}
          slug={card.id}
        />
      ))}
    </div>
  );
};

