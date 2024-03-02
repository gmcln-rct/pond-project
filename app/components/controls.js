import React, { useEffect } from "react";

import styles from "./controls.module.scss";

export default function Controls(props) {
  const { currentTense, setCurrentTense } = props;

  // useEffect(() => {
  //   console.log("currentTense", currentTense);
  // }
  // ,[currentTense]);

  return (
    <div className={styles.controlsContainer}>
      <button
        className={styles.controlsContainer__button}
        onClick={() => setCurrentTense("past")}
      >
        Past
      </button>
      <button
        className={styles.controlsContainer__button}
        onClick={() => setCurrentTense("present")}
      >
        Present
      </button>
      <button
        className={styles.controlsContainer__button}
        onClick={() => setCurrentTense("future")}
      >
        Future
      </button>
    </div>
  );
}
