"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./verb-list.module.scss";

import VerbSelector from "../components/verb-selector";

import { filterVerbsByRank } from "../_utils/filterVerbs";

import { BRAZILIAN_VERBS } from "../data/brazil-verbs";

export default function VerbList() {
  const [filteredVerbs, setFilteredVerbs] = useState(BRAZILIAN_VERBS);
  const [verbQuantity, setVerbQuantity] = useState(10);

  const verbs = BRAZILIAN_VERBS;
  const verbTotal = verbs.length;

  useEffect(() => {
    const verbs = filterVerbsByRank(verbQuantity);
    setFilteredVerbs(verbs);
  }, [verbQuantity]);

  return (
    <div className={styles.verbListContainer}>
      <VerbSelector verbTotal={verbTotal} setVerbQuantity={setVerbQuantity} />
      {/* <h2 className={styles.verbListContainer__title}>
        Select verb to see flashcards.
      </h2> */}
      <ul className={styles.verbListContainer__list}>
        {filteredVerbs.map((verb) => {
          return (
            <li
              className={styles.verbListContainer__itemContainer}
              key={verb.id}
            >
              <Link
                className={styles.verbListContainer__verbItem}
                href={`/verbs/${verb.id}?qty=${verbQuantity}`}
              >
                {verb.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
