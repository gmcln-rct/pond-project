// components/Cards.js
import Card from './card';

const cards = [
  {
    photo: '/images/pond-temp-1.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    slug: 'card-1',
  },
  {
    photo: '/images/pond-temp-2.jpg',
    text: 'Sed do eiusmod tempor incididunt ut labore et dolore...',
    slug: 'card-2',
  },
  // Add more card objects as needed
];

export default function Cards() {
  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <Card
          key={index}
          photo={card.photo}
          text={card.text}
          slug={card.slug}
        />
      ))}
    </div>
  );
};

