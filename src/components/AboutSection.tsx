import React from "react";

import Image from "next/image";

import styles from "./AboutSection.module.css";

function AboutSection() {
  return (
    <section id={styles.about__section}>
      <div className={styles.about__image__container}>
        <Image
          src="/astrounaut.jpg"
          alt="image"
          width="590"
          height="640"
          className={styles.about__image}
        ></Image>
        <div className={styles.about__image__box}></div>
      </div>
      <div className={styles.about__text}>
        <h4> About Company</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ipsa
          consequuntur impedit maxime exercitationem, assumenda quas quod
          aperiam aliquid? Iure qui repudiandae dignissimos officia ipsa sit
          nesciunt sint voluptate ullam minus? Temporibus impedit reprehenderit
          inventore magnam, quia tenetur architecto commodi, perspiciatis harum
          blanditiis fuga molestias. Dolore voluptates perspiciatis, quasi,
          rerum, iste iusto repudiandae unde quo quae inventore rem! Illo ex
          earum maiores saepe obcaecati recusandae ipsa commodi incidunt soluta
          magni.
        </p>
        <button> See More </button>
      </div>
    </section>
  );
}

export default AboutSection;
