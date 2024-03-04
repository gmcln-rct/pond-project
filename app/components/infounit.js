import styles from "./infounit.module.scss";

import Image from "next/image";

export default function InfoUnit(props) {
  const {title, description, image, imagePlacement} = props;
  return (
    <section className={styles.infounit}>
      <div className={styles.infounit__section}>
        <h2 className={styles.infounit__title}>{title}</h2>
        <p className={styles.infounit__description}>
          Monitoring water quality helps determine the health of aquatic
          ecosystems. Imbalances in water quality can make it inhabitable for
          life or cause algal bloom.
        </p>
      </div>
      <div className={styles.infounit__section}>
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
