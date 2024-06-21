import styles from "./info-unit.module.scss";
import Image from "next/image";

// HIGHLIGHT UNIT FOR HOMEPAGE
export default function InfoUnit(props) {
  const {
    certificationNumbers,
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
    <section className={styles.infounit}>
      <div className={styles.infounit__contentsection} style={alignImage1}>
        <h2 className={styles.infounit__title}>{title}</h2>
        <p className={styles.infounit__description}>{description}</p>
      </div>
      <div className={styles.infounit__imageSection} style={alignImage2}>

          <div className={styles.infounit__imageContainer}>
            <Image
              src={image}
              alt="Pond Hero"
              className={styles.infounit__image}
              width={300}
              height={300}
            />
          </div>
      </div>
    </section>
  );
}