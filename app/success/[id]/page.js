import Image from "next/image";

import { successStories } from "../../data/success-stories";

import styles from "./page.module.scss";

export default function IndividualStory({ params }) {
  function findStory(id) {
    return successStories.find((story) => story.id === id);
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
          // layout="responsive"
        />
      </div>
      <div className={styles.successStory__content}>
        <h2 className={styles.successStory__title}>{story.title}</h2>
        <p className={styles.successStory__client}>Client: {story.client}</p>
        <p className={styles.successStory__dates}>{story.dates}</p>
        {/* <div className={styles.successStory__content}>{story.longTextRte}</div> */}
        <div
          className={styles.successStory__content}
          dangerouslySetInnerHTML={{ __html: story.longTextRte }}
        ></div>
      </div>
    </section>
  );
}
