import styles from "./highlight-container.module.scss";
import HighlightUnit from "./highlight-unit";


export default function InfoContainer(props) {
  const { infoUnitsData } = props;
  return (
    <div className={styles.highlight__container}>
      {infoUnitsData.map((infoUnitData) => (
        <HighlightUnit key={infoUnitData.title} {...infoUnitData} />
      ))}
    </div>
  );
}
