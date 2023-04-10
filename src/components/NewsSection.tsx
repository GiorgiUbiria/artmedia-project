"use client";

import React, { useState } from "react";

import { cardCollection } from "@/app/api/cardCollection";

import styles from "./NewsSection.module.css";

function NewsSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cardCollection.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cardCollection.length - 1 : prevIndex - 1
    );
  };
  return (
    <section id={styles.news__section}>
      <header className={styles.news__head}>
        <h3 className={styles.news__header}> News</h3>
        <section className={styles.buttons}>
          <button
            disabled={currentIndex === 0}
            className={styles.left__button}
            onClick={() => {
              handlePrev();
            }}
          >
            <svg
              width="33"
              height="16"
              viewBox="0 0 33 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.2"
                d="M0.292893 7.29289C-0.0976295 7.68341 -0.0976296 8.31658 0.292892 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31945 8.07107 0.92893C7.68054 0.538406 7.04738 0.538406 6.65686 0.92893L0.292893 7.29289ZM33 7L1 7L1 9L33 9L33 7Z"
                fill="#2B3252"
              />
            </svg>
          </button>
          <button
            className={styles.right__buttton}
            onClick={() => {
              handleNext();
            }}
          >
            <svg
              width="33"
              height="16"
              viewBox="0 0 33 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.7071 8.70711C33.0976 8.31658 33.0976 7.68342 32.7071 7.29289L26.3431 0.928932C25.9526 0.538408 25.3195 0.538408 24.9289 0.928932C24.5384 1.31946 24.5384 1.95262 24.9289 2.34315L30.5858 8L24.9289 13.6569C24.5384 14.0474 24.5384 14.6805 24.9289 15.0711C25.3195 15.4616 25.9526 15.4616 26.3431 15.0711L32.7071 8.70711ZM0 9H32V7H0V9Z"
                fill="#2B3252"
              />
            </svg>
          </button>
        </section>
      </header>
      <div className={styles.card__box}></div>
      <figure className={styles.card__carousel}>
        {cardCollection.slice(currentIndex).map((card) => (
          <div
            className={styles.card}
            key={card.id}
            style={{ backgroundImage: `url(${card.url})` }}
          >
            <div className={styles.card__text}>
              <h3> {card.name}</h3>
              <p>{card.date}</p>
              <button> See More </button>
            </div>
          </div>
        ))}
      </figure>
    </section>
  );
}

export default NewsSection;
