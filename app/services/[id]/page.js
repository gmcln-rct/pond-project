import Image from "next/image";

import { services } from "../../data/services";

import SocialMediaContainer from "../../components/social-media-container";

import styles from "./page.module.scss";

export default function IndividualStory({ params }) {
  function findStory(id) {
    return services.find((story) => story.id === id);
  }

  const story = findStory(params.id);

  return (
    <>
    <section className={styles.servicesStory}>
      <div className={styles.servicesStory__imageWrapper}>
        <Image
          className={styles.servicesStory__image}
          src={story.image}
          alt={story.title}
          width={507}
          height={446}
        />
      </div>
      <div className={styles.servicesStory__contentWrapper}>
        <h2 className={styles.servicesStory__title}>{story.title}</h2>
        <div
          className={styles.servicesStory__content}
          dangerouslySetInnerHTML={{ __html: story.longTextRte }}
        ></div>
      </div>
    </section>
    <SocialMediaContainer />
    </>
  );
}
