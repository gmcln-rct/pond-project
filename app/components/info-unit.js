import styles from "./info-unit.module.scss";

import Image from "next/image";

import InfoUnitList from "./info-unit-list";

export default function InfoUnit(props) {
  const {
    title,
    description,
    subdescription,
    image,
    imageStyle,
    imagePlacement,
    servicesList
  } = props;
  const circleStyle = imageStyle === "certification" ? true : false;
  const alignImage1 = {
    order: imagePlacement === "left" ? 1 : 2,
  };
  const alignImage2 = {
    order: imagePlacement === "left" ? 2 : 1,
  };
  return (
    <section className={circleStyle ? `${styles.infounit2}` : `${styles.infounit}`}>
      <div className={styles.infounit__contentsection} style={alignImage1}>
        <h2 className={styles.infounit__title}>{title}</h2>
        <p className={styles.infounit__description}>{description}</p>
        {imageStyle === "certification" ? (
          <p className={styles.infounit__description}>{subdescription}</p>
        ) : <InfoUnitList infoUnitListData={servicesList} />}
      </div>
      <div className={styles.infounit__imagesection} style={alignImage2}>
        {imageStyle === "certification" ? (
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
