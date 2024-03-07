import styles from "./infounit.module.scss";

import Image from "next/image";

export default function InfoUnit(props) {
  const {
    title,
    description,
    subdescription,
    image,
    imageStyle,
    imagePlacement,
  } = props;
  const styleTest1 = {
    order: imagePlacement === "left" ? 1 : 2,
  };
  const styleTest2 = {
    order: imagePlacement === "left" ? 2 : 1,
  };
  return (
    <section className={styles.infounit}>
      <div className={styles.infounit__contentsection} style={styleTest1}>
        <h2 className={styles.infounit__title}>{title}</h2>
        <p className={styles.infounit__description}>{description}</p>
        {imageStyle === "circle" ? (
          <p className={styles.infounit__description}>{subdescription}</p>
        ) : null}
      </div>
      <div className={styles.infounit__imagesection} style={styleTest2}>
        {imageStyle === "circle" ? (
          <div className={styles.infounit__sealcontainer}>
            <Image
              src={image}
              alt="Pond Hero"
              className={styles.infounit__image}
              width={300}
              height={300}
            />
          </div>
        ) : (
          <div className={styles.infounit__imagecontainer}>
            <Image
              src={image}
              alt="Pond Hero"
              className={styles.infounit__image}
              width={200}
              height={200}
            />
          </div>
        )}
      </div>
    </section>
  );
}
