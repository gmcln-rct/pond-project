import styles from "./info-container.module.scss";
import InfoUnit from "./info-unit";


export default function InfoContainer(props) {
  const { infoUnitsData } = props;
  return (
    <div className={styles.info__container}>
      {infoUnitsData.map((infoUnitData) => (
        <InfoUnit key={infoUnitData.title} {...infoUnitData} />
      ))}
    </div>
  );
}
