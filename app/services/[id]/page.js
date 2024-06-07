import Image from "next/image";

import { services } from "../../data/services";

import styles from "../../success/page.module.scss";

export default function IndividualStory({ params }) {
  function findStory(id) {
    return services.find((story) => story.id === id);
  }

  const story = findStory(params.id);

  return (
    <section className={styles.successStory}>
      <div className={styles.successStory__wrapper}>
        <Image
          className={styles.successStory__image}
          src={story.image}
          alt={story.title}
          width={507}
          height={446}
        />
      </div>
      <div className={styles.successStory__content}>
        <h2 className={styles.successStory__title}>{story.title}</h2>
        <div
          className={styles.successStory__content}
          dangerouslySetInnerHTML={{ __html: story.longTextRte }}
        ></div>
      </div>
    </section>
  );
}
