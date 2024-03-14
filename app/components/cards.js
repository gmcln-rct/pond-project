// components/Cards.js
import Card from './card';

import styles from './cards.module.scss';

export default function Cards(props) {

  const { cardcontent, isservices } = props;

  return (
    <div className={styles.cards}>
      {cardcontent.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          text={card.description}
          id={card.id}
          isservices={isservices}
        />
      ))}
    </div>
  );
};

