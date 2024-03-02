import React from "react";
import styles from "./verb-selector.module.scss";

export default function VerbSelector(props) {
  const { verbTotal, setVerbQuantity } = props;

  const allVerbs = verbTotal;

  console.log("allVerbs", allVerbs);

  const handleChange = (event) => {
    const verbQuantity = event.target.value;
    // change string value to integer
    let verbQuantityInt = parseInt(verbQuantity);
    setVerbQuantity(verbQuantityInt);
  };

  return (
    <div className={styles.selectContainer}>
      <label className={styles.formLabel} htmlFor="verb">
        Which verbs do you wish to conquer?
      </label>
      <select
        className={styles.selectDropdown}
        name="verb"
        id="verb"
        onChange={handleChange}
      >
        <option value="10">Top 10 Most Common</option>
        <option value="15">Top 15 Most Common</option>
        <option value="20">Top 20 Most Common</option>
        <option value={allVerbs}>All</option>
      </select>
    </div>
  );
}
