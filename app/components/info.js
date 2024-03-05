import styles from "./info.module.scss";

import InfoUnit from "./infounit";

export default function InfoContainer() {
  return (
    <div className={styles.info__container}>
      <InfoUnit
        title="Pond & Lake Management"
        description="Monitoring water quality helps determine the health of aquatic ecosystems. Imbalances in water quality can make it inhabitable for life or cause algal bloom."
        image="/images/pond-temp-1.jpg"
        imagePlacement="left"
      />
      <InfoUnit
        title="Pest Control"
        description="Pest control is the regulation or management of a species defined as a pest, a member of the animal kingdom that impacts adversely on human activities."
        image="/images/pond-temp-6.jpg"
        imagePlacement="right"
      />
      <InfoUnit
        title="Invasive Species Management"
        description="Invasive species are plants, animals, or pathogens that are non-native to the ecosystem under consideration and whose introduction causes or is likely to cause harm."
        image="/images/pond-temp-5.jpg"
        imagePlacement="left"
      />
      <InfoUnit
        title="Permits & Grants"
        description="Preparing environmental permits and grant applications for pond and lake management projects."
        image="/images/pond-temp-7.jpg"
        imagePlacement="right"
      />
      <InfoUnit
        title="Water Quality Testing"
        description="Water quality testing is an important part of environmental monitoring. When water quality is poor, it affects not only aquatic life but the surrounding ecosystem as well."
        image="/images/pond-temp-8.jpg"
        imagePlacement="left"
      />
    </div>
  );
}
