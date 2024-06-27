import React from 'react';
import styles from "./highlight-container.module.scss";
import HighlightUnit from "./highlight-unit";

export default function HighlightContainer(props) {
  const { infoUnitsData } = props;
  return (
    <div className={styles.highlight__container}>
      {infoUnitsData.map((infoUnitData, index) => (
        <HighlightUnit
          key={infoUnitData.title}
          {...infoUnitData}
          className={styles.fadeIn}
          style={{ animationDelay: `${index * 0.9}s` }}
        />
      ))}
    </div>
  );
}