import styles from "./info.module.scss";
import HighlightUnit from "./highlight-unit";


export default function InfoContainer(props) {
  const { infoUnitsData } = props;
  return (
    <div className={styles.info__container}>
      {infoUnitsData.map((infoUnitData) => (
        <HighlightUnit key={infoUnitData.title} {...infoUnitData} />
      ))}
    </div>
  );
}
