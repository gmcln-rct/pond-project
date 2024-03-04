import styles from "./infounit.module.scss";

import Image from "next/image";

export default function InfoUnit(props) {
  const {title, description, image, imagePlacement} = props;
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
        <p className={styles.infounit__description}>
         {description}
        </p>
      </div>
      <div className={styles.infounit__imagesection} style={styleTest2}>
        <Image
          src={image}
          alt="Pond Hero"
          className={styles.infounit__image}
          width={200}
          height={200}
        />
      </div>
    </section>
  );
}
