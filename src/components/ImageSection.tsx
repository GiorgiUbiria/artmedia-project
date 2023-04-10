import React from "react";

import Image from "next/image";

import styles from "./ImageSection.module.css";

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

function ImageSection() {
  return (
    <section id={styles.image__section}>
      <div className={styles.image__container}>
        <Image
          src="/imagejpg.jpg"
          alt="image"
          width="1700"
          height="780"
          className={styles.image}
        ></Image>
        <div className={styles.image__box}></div>
      </div>
      <div className={styles.image__text__container}>
        <div className={styles.image__text}>
          <h1 className={montserrat.className}>
            Company&apos;s First Service Title
          </h1>
          <p className={montserrat.className}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem labore
            ducimus, repellendus ab, quo assumenda cumque, id facere eius illo
            sit doloremque? Omnis debitis aut molestiae temporibus.
          </p>
          <button className={montserrat.className}>Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default ImageSection;
