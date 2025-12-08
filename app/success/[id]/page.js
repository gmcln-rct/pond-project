import Image from "next/image";

import SocialMediaContainer from "../../components/social-media-container";
import IndividualStoryRTE from "./individual-story-rte-client";

import { successStories } from "../../data/success-stories";

import styles from "./page.module.scss";

export default function IndividualStory({ params }) {
  function findStory(id) {
    return successStories.find((story) => story.id === id);
  }

  const story = findStory(params.id);

  return (
    <>
      <section className={styles.successStory}>
        <div className={styles.successStory__imageWrapper}>
          <Image
            className={styles.successStory__image}
            src={story.image}
            alt={story.title}
            width={1500}
            height={1000}
          />
        </div>
        <div className={styles.successStory__contentWrapper}>
          <div className={styles.successStory__content}>
            <h2 className={styles.successStory__title}>{story.title}</h2>
            <p className={styles.successStory__client}>
              Client: {story.client}
            </p>
            <p className={styles.successStory__dates}>{story.dates}</p>
            <IndividualStoryRTE story={story} />
          </div>
        </div>
      </section>
      <SocialMediaContainer />
    </>
  );
}
