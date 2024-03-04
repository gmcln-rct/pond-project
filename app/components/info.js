import styles from "./info.module.scss";

import InfoUnit from "./infounit";

export default function InfoContainer() {
  return (
    <div className={styles.info__container}>
      InfoContainer
      <InfoUnit
        title="Pond & Lake Management"
        description="Monitoring water quality helps determine the health of aquatic ecosystems. Imbalances in water quality can make it inhabitable for life or cause algal bloom."
        image="/images/pond-temp-1.jpg"
        imagePlacemnt="left"
      />
      <InfoUnit
        title="Pest Control"
        description="Pest control is the regulation or management of a species defined as a pest, a member of the animal kingdom that impacts adversely on human activities."
        image="/images/pond-temp-6.jpg"
        imagePlacemnt="right"
      />

<InfoUnit
        title="Invasive Species Management"
        description="Invasive species are plants, animals, or pathogens that are non-native to the ecosystem under consideration and whose introduction causes or is likely to cause harm."
        image="/images/pond-temp-5.jpg"
        imagePlacemnt="left"
      />
    </div>
  );
}
