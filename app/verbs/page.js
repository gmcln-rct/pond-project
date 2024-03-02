"use client";

import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.scss";

import VerbSelector from "../components/verb-selector";

import { filterVerbsByRank } from "../_utils/filterVerbs";

import { BRAZILIAN_VERBS } from "../data/brazil-verbs";

export default function VerbList() {
  const [filteredVerbs, setFilteredVerbs] = useState(BRAZILIAN_VERBS);
  const [verbQuantity, setVerbQuantity] = useState(10);

  const verbs = BRAZILIAN_VERBS;
  const verbTotal = verbs.length;
  console.log('in page verbTotal', verbTotal);

  useEffect(() => {
    const verbs = filterVerbsByRank(verbQuantity);
    setFilteredVerbs(verbs);
  }, [verbQuantity]);

  return (
    <div className={styles.container}>
      <VerbSelector verbTotal={verbTotal} setVerbQuantity={setVerbQuantity} />
      <div className={styles.verbList}>
        <p>{verbQuantity}</p>
        <ul>
          {filteredVerbs.map((verb) => {
            return (
              <li key={verb.id}>
                <Link href={`/verbs/${verb.id}`}>{verb.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
