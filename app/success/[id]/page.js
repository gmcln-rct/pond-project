import { successStories } from "../../data/success-stories";

import styles from "./page.module.scss";

export default function IndividualStory({ params }) {
  function findStory(id) {
    return successStories.find((story) => story.id === id);
  }

  const story = findStory(params.id);

  return (
    <section className={styles.successStory}>
      <div>IndividualStory</div>
      <div>{params.id}</div>
      <h2>{story.title}</h2>
      <p>{story.description}</p>
      <div>{story.longTextRte}</div>
    </section>
  );
}
