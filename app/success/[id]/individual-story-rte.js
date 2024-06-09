import styles from "./page.module.scss";

export default function IndividualStoryRTE({ story }) {
  return (
    <div
      className={styles.successStory__content}
      dangerouslySetInnerHTML={{ __html: story.longTextRte }}
      suppressHydrationWarning={true}
    ></div>
  );
}