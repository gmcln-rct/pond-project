"use client";

import Image from "next/image";

import styles from "./page.module.scss";

import { labels } from "../data/labels";

export default function LabelsPage() {
  const handleImageClick = (label) => {
    const link = document.createElement("a");
    link.href = label.pdfUrl;
    link.download = label.title + ".pdf";
    link.click();
  };

  return (
    <section className={styles.labelsPage}>
      <div className={styles.labelsPage__header}>
        <h1>Product Labels</h1>
        <p className={styles.labelsPage__description}>
        If you are a riparian owner or vested water user, you may have received a notification letter regarding an aquatic plant or algae treatment. Your notification letter will name the product relevant to your property and or any water use restrictions. Please scroll through the PDFs provided below to view labels for NYS Registered products and Special Local Needs Labels (NY SLNs) if applicable.
        </p>
        <p className={styles.labelsPage__description}>
          Click on a label to download the PDF.
        </p>
      </div>
      <div className={styles.labelsPage__wrapper}>
        {labels.map((label, index) => (
          <div
            key={index}
            className={styles.labelsPage__item}
            onClick={() => handleImageClick(label)}
          >
            <Image
              src={label.image}
              alt={label.title}
              width={label.width * 0.6}
              height={label.height * 0.6}
            />
            <p className={styles.labelsPage__label}>{label.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
