// components/Cards.js
import Card from './card';

import styles from './cards.module.scss';

import {successStories} from '../data/success-stories';

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

