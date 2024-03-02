"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Link from "next/link";
import styles from "./page.module.scss";

import Slide from "../../components/slide";
import Controls from "@/app/components/controls";

import { getVerbItem, getVerbItemByRank } from "@/app/_utils/filterVerbs"; // import the function that will filter the verbs

// Icons
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function VerbItem({ params }) {
  const [currentTense, setCurrentTense] = useState("present"); // default to present tense

  const searchParams = useSearchParams();
  const qty = parseInt(searchParams.get("qty"));

  const currentId = params.id;
  const verbItem = getVerbItem(currentId);
  const [currentConjugation, setCurrentConjugation] = useState(
    verbItem["present"]
  ); // default to eu

  const currentRankInt = parseInt(verbItem.rank);
  const previousRank = currentRankInt > 1 ? currentRankInt - 1 : qty;
  const nextRank = currentRankInt < qty ? currentRankInt + 1 : 1;
  const prevVerb = getVerbItemByRank(previousRank);
  const nextVerb = getVerbItemByRank(nextRank);

  useEffect(() => {
    setCurrentConjugation(verbItem[currentTense]);
    ``;
  }, [currentTense]);

  return (
    <section className={styles.verbItem__container}>
      <div className={styles.verbItem__header}>
        <h2 className={styles.verbItem__headWrapper}>
          verb:{" "}
          <span className={styles.verbItem__highlight}>{verbItem.name}</span>
        </h2>
        <h2 className={styles.verbItem__headWrapper}>
          definition:{" "}
          <span className={styles.verbItem__highlight}>
            {verbItem.definition}
          </span>
        </h2>
      </div>
      <div className={styles.slideContainer}>
        <Link
          className={styles.buttons}
          href={`/verbs/${prevVerb.id}?qty=${qty}`}
        >
          <ArrowBackIosIcon fontSize="large" />
        </Link>
        <Slide currentConjugation={currentConjugation} />
        <Link
          className={styles.buttons}
          href={`/verbs/${nextVerb.id}?qty=${qty}`}
        >
          <ArrowForwardIosIcon fontSize="large" />
        </Link>
      </div>
      <Controls currentTense={currentTense} setCurrentTense={setCurrentTense} />
    </section>
  );
}
