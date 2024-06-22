import styles from "./highlight-unit.module.scss";
import Image from "next/image";

// HIGHLIGHT UNIT FOR HOMEPAGE
export default function HighlightUnit(props) {
  const {
    description,
    image,
    imageStyle,
    imagePlacement,
    title
  } = props;

  const alignImage1 = {
    order: imagePlacement === "left" ? 1 : 2,
  };
  const alignImage2 = {
    order: imagePlacement === "left" ? 2 : 1,
  };

  return (
    <section className={styles.highlightUnit}>
      <div className={styles.highlightUnit__contentsection} style={alignImage1}>
        <h2 className={styles.highlightUnit__title}>{title}</h2>
        <p className={styles.highlightUnit__description}>{description}</p>
      </div>
      <div className={styles.highlightUnit__imageSection} style={alignImage2}>

          <div className={styles.highlightUnit__imageContainer}>
            <Image
              src={image}
              alt="Pond Hero"
              className={styles.highlightUnit__image}
              width={300}
              height={300}
            />
          </div>
      </div>
    </section>
  );
}