import { successStories } from "../../data/success-stories";

import styles from "./page.module.scss";

export default function IndividualStory({ params }) {
  function findStory(id) {
    return successStories.find((story) => story.id === id);
  }

  const story = findStory(params.id);

  return (
    <section className={styles.successStory}>
      <h2 className={styles.successStory__title}>{story.title}</h2>
      <div className={styles.successStory__content}>{story.longTextRte}</div>
    </section>
  );
}
