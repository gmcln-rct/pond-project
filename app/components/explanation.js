import React from "react";

import styles from "./explanation.module.scss";

export default function Explanation() {
  return (
    <div className={styles.explanationContent}>
      <h1>Verb</h1>
      <p>What verbs do you want to practice?</p>
    </div>
  );
}
